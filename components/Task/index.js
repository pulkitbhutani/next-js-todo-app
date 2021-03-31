import Input from "../Input";
import Button from "../Button";
import TaskItemCard from "../TaskItemCard";
import { PrismaClient } from "@prisma/client";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../../redux/task/taskActions";
import {toggleTaskCompleted} from "../../redux/task/taskActions";

export default function Task() {
  const taskData = useSelector((state) => state.tasks);
  
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState("");

  const onTaskSubmit = (value) => {
    fetch("http://localhost:3000/api/addTask", {
      method: "POST",
      body: JSON.stringify({
        title: value,
        completed: false,
        projectId: taskData.selectedProjectId,
      }),
    })
      .then((data) => data.json())
      .then((res) => {
        dispatch(addTask(res.id, res.title, res.completed, res.projectId));
      })
      .then(setTaskName(""));
  };

  const handleCompleteChanged = () => {
    dispatch({type: 'TOGGLE_TASK_COMPLETED', id: taskId});
  }

  return (
    <div>
      <h2>{taskData.selectedProjectTitle}</h2>
      <ul>
        {taskData &&
          taskData.tasks &&
          taskData.tasks.map((task) => <TaskItemCard title={task.title}/>)}
      </ul>
      <div className='w-full block'>
        <Input text={taskName} setText={setTaskName} />
        <Button
          text={"Add Task"}
          onClick={() => {
            if (taskName !== "") {
              onTaskSubmit(taskName);
            }
          }}
        />
      </div>
    </div>
  );
}
