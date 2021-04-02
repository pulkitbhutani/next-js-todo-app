import { fetchTasks } from "../redux/task/taskActions";
import { addProject } from "../redux/projects/projectActions";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {API_LINK} from "../utility/constants";

function useProjects() {
  const [projectName, setProjectName] = useState("");
  const projectData = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    if (projectData.loading === false) {
      console.log(
        "project id recived on use effect - ",
        projectData.projects[0].id
      );
      loadTasks(projectData.projects[0].id, projectData.projects[0].title);
    }
  }, [projectData.loading]);

  const onProjectSubmit = (value) => {
    fetch(`${API_LINK}/addProject`, {
      method: "POST",
      body: JSON.stringify({ title: value, userId: 1 }),
    })
      .then((data) => data.json())
      .then((res) => dispatch(addProject(res.id, res.title, 1)))
      .then(setProjectName(""));
  };

  const loadTasks = (projectId, projectTitle) => {
    console.log("project id recieved to loadTasks -", projectId);
    dispatch(fetchTasks(projectId, projectTitle));
  };

  return {
    projectName,
    setProjectName,
    projectData,
    onProjectSubmit,
    loadTasks
  };
}

export default useProjects;
