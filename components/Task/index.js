import Input from "../Input";
import Button from "../Button";
import Card from "../Card";
import { PrismaClient } from '@prisma/client';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Task() {
  const taskData = useSelector((state) => state.tasks);
  const [taskName, setTaskName] = useState("");
  console.log('taskdata -', taskData);
  const onTaskSubmit = (value) => {
    fetch("http://localhost:3000/api/projects", {
      method: "POST",
      body: JSON.stringify({ title: value, userId: 1 }), 
    });
  };

  return (
    <div>
        <div>
            {taskData && taskData.tasks && taskData.tasks.map((task)=>(
                <Card title={task.title}/>
            ))}
      </div>
      <div>
        <Input text={taskName} setText={setTaskName} />
        <Button
          text={"Add Task"}
          onClick={() => {
            onTaskSubmit(taskName);
          }}
        />
      </div>
      
    </div>
  );
}