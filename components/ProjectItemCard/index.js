import {
  deleteProject,
  deleteProjectSuccess,
} from "../../redux/projects/projectActions";
import DeleteButton from "../DeleteButton";
import { useDispatch, useSelector } from "react-redux";

export default function ProjectItemCard({ projectId, title, onClick }) {
  const dispatch = useDispatch();

  const handleDeleteClicked = () => {
    deleteProject(projectId).then((res) => {
      if (res.id) {
        dispatch(deleteProjectSuccess(res.id));
      }
    });
  };

  return (
    <li>
      <div
        className="bg-white rounded shadow-md h-12 justify-self-end m-3 grid grid-cols-6 gap-4"
        onClick={onClick}
      >
        <span className="font-bold inline-block m-3 align-left col-start-1 col-end-3">
          {title}
        </span>
        <div className="col-end-7 col-span-2">
          <DeleteButton text={"Delete"} onClick={handleDeleteClicked} />
        </div>
      </div>
    </li>
  );
}
