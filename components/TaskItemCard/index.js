import {
  toggleTaskCompleted,
  toggleTaskCompletedSuccess,
  deleteTask,
  deleteTaskSuccess,
} from "../../redux/task/taskActions";
import Checkbox from "../Checkbox";
import DeleteButton from "../DeleteButton";
import { useDispatch, useSelector } from "react-redux";

const TaskItemCard = ({ title, taskId, completed }) => {
  const dispatch = useDispatch();
  console.log(completed);

  const handleCompleteChanged = () => {
    toggleTaskCompleted(taskId, completed).then((res) =>
      dispatch(toggleTaskCompletedSuccess(res.id))
    );
  };

  const handleDeleteClicked = () => {
    deleteTask(taskId).then((res) => {
      if (res.id) {
        dispatch(deleteTaskSuccess(res.id));
      }
    });
  };

  return (
    <li>
      <div className="bg-white rounded shadow-md h-12 m-3 flex flex-wrap content-end space-x-14">
        <Checkbox isCompleted={completed} onChange={handleCompleteChanged} />
        <div>
          <p
            className={
              "font-bold m-3 inline-block align-middle " +
              (completed ? "line-through" : "")
            }
          >
            {title}
          </p>
        </div>
        <DeleteButton text={"Delete"} onClick={handleDeleteClicked} />
      </div>
    </li>
  );
};

export default TaskItemCard;
