import Input from "../Input";
import Button from "../Button";
import TaskItemCard from "../TaskItemCard";
import useTasks from "../../hooks/useTasks";

export default function Task() {

  const {taskName, setTaskName, taskData, onTaskSubmit} = useTasks();

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
