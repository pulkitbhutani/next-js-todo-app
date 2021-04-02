import Input from "../Input";
import Button from "../Button";
import Loader from "../Loader";
import ProjectItemCard from "../ProjectItemCard";
import useProjects from "../../hooks/useProjects";
const Project = () => {

  const { projectName,setProjectName, projectData, onProjectSubmit, loadTasks} = useProjects();

  return projectData.loading ? (
    <Loader/>
  ) : projectData.error ? (
    <h2>{projectData.error}</h2>
  ) : (
    <div className='container'>
      <h2 className="text-5xl font-normal leading-normal mt-0 mb-2 text-green-500 m-3">My Projects</h2>
      <ul>
        {projectData &&
          projectData.projects &&
          projectData.projects.map((project) => (
            <ProjectItemCard
              key = {project.id}
              projectId = {project.id}
              title={project.title}
              onClick={() => loadTasks(project.id, project.title)}
            />
          ))}
      </ul>
      <div>
        <Input text={projectName} setText={setProjectName} />
        <Button
          text={"Add Project"}
          onClick={() => {
            if (projectName !== "") {
              onProjectSubmit(projectName);
            }
          }
        }
        />
      </div>
    </div>
  );
};

export default Project;
