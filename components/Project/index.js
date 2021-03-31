import Input from "../Input";
import Button from "../Button";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProjectItemCard from "../ProjectItemCard";
import { fetchTasks } from "../../redux/task/taskActions";
import { addProject } from "../../redux/projects/projectActions";

const Project = () => {
  const projectData = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  const loadTasks = (projectId, projectTitle) => {
    console.log("project id recieved to loadTasks -", projectId);
    dispatch(fetchTasks(projectId, projectTitle));
  };

  useEffect(() => {
    if (projectData.loading === false) {
      console.log(
        "project id recived on use effect - ",
        projectData.projects[0].id
      );
      loadTasks(projectData.projects[0].id, projectData.projects[0].title);
    }
  }, [projectData.loading]);

  console.log("data", projectData);
  const [projectName, setProjectName] = useState("");

  const onProjectSubmit = (value) => {
    fetch("http://localhost:3000/api/addProject", {
      method: "POST",
      body: JSON.stringify({ title: value, userId: 1 }),
    })
      .then((data) => data.json())
      .then((res) => dispatch(addProject(res.id, res.title, 1)))
      .then(setProjectName(""));
  };

  return projectData.loading ? (
    <h2>Loading</h2>
  ) : projectData.error ? (
    <h2>{projectData.error}</h2>
  ) : (
    <div className='container'>
      <div>
        {projectData &&
          projectData.projects &&
          projectData.projects.map((project) => (
            <ProjectItemCard
              title={project.title}
              onClick={() => loadTasks(project.id, project.title)}
            />
          ))}
      </div>
      <div>
        <Input text={projectName} setText={setProjectName} />
        <Button
          text={"Add Project"}
          onClick={() => {
            if (projectName !== "") {
              onProjectSubmit(projectName);
            }
          }}
        />
      </div>
    </div>
  );
};

export default Project;
