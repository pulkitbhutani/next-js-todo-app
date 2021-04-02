import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../redux/task/taskActions";
import { useState } from "react";
import {API_LINK} from "../utility/constants";


function useTasks() {
  const [taskName, setTaskName] = useState("");
  const taskData = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const onTaskSubmit = (value) => {
    fetch(`${API_LINK}/addTask`, {
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

  return {
    taskName,
    setTaskName,
    taskData,
    onTaskSubmit,
  };
}

export default useTasks;
