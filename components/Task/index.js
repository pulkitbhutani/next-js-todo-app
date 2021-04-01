import Input from "../Input";
import Button from "../Button";
import TaskItemCard from "../TaskItemCard";
import { PrismaClient } from "@prisma/client";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../../redux/task/taskActions";

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

  return (
    <div>
      <h2 className="text-5xl font-normal leading-normal mt-0 mb-2 text-green-500 m-3">{taskData.selectedProjectTitle}</h2>
      <ul>
        {taskData &&
          taskData.tasks &&
          taskData.tasks.map((task) => <TaskItemCard key={task.id} title = {task.title} taskId ={task.id} completed ={task.completed} />)}
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
