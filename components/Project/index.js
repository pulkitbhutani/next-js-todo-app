import Input from "../Input";
import Button from "../Button";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card";
import { fetchTasks } from "../../redux/task/taskActions";

const Project = () => {
  const projectData = useSelector((state) => state.projects);
  console.log('projectdata -', projectData);
  const dispatch = useDispatch();

  const loadTasks = (projectId) => {
    console.log('project id recieved to loadTasks -', projectId)
    dispatch(fetchTasks(projectId));
  }

  useEffect(() => {
    if(projectData.loading=== false){
      console.log('project id recived on use effect - ',projectData.projects[0].id)
      loadTasks(projectData.projects[0].id);
    }
  },[projectData.loading])

  console.log("data", projectData);
  const [projectName, setProjectName] = useState("");

  const onProjectSubmit = (value) => {
    fetch("http://localhost:3000/api/addProject", {
      method: "POST",
      body: JSON.stringify({ title: value, userId: 1 }),
    })
      .then((data) => data.json())
      .then((res) => props.dispatch(addProject(res.id, res.title)));
  };

  return projectData.loading ? (
    <h2>Loading</h2>
  ) : projectData.error ? (
    <h2>{projectData.error}</h2>
  ) : (
    <div>
      <div>
        {projectData && projectData.projects && projectData.projects.map((project) => (
          <Card title={project.title} onClick={()=> loadTasks(project.id)}/>
        ))}
      </div>
      <div>
        <Input text={projectName} setText={setProjectName} />
        <Button
          text={"Add Project"}
          onClick={() => {
            onProjectSubmit(projectName);
          }}
        />
      </div>
    </div>
  );
};

export default Project;
