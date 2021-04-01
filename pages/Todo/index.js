import Project from "../../components/Project";
import Task from "../../components/Task";
import Navbar from "../../components/Navbar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProjects } from "../../redux/projects/projectActions";

function Todo() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1">
        <Navbar />
      </div>
      <div className="grid grid-cols-3 gap-10">
        <div className="...">
          <Project />
        </div>
        <div className="col-span-2 ...">
          <Task />
        </div>
      </div>
    </div>
  );
}

export default Todo;
