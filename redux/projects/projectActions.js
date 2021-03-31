import { FETCH_PROJECTS, ADD_PROJECT, FETCH_PROJECTS_REQUEST, FETCH_PROJECTS_FAILURE } from "./projectTypes";

export const addProject = (id, title, userId) => ({
  type: ADD_PROJECT,
  id,
  title,
  userId
});

export const fetchProjectsSuccess = (payload) => ({
  type: FETCH_PROJECTS,
  payload
});

export const fetchProjectRequest = () => ({
  type: FETCH_PROJECTS_REQUEST
});

export const fetchProjectFailure = (err) => ({
  type: FETCH_PROJECTS_FAILURE,
  err
});

export const fetchProjects = () => { 
  return (dispatch) => {
  dispatch(fetchProjectRequest());
  fetch("http://localhost:3000/api/projects")
      .then(response => response.json())
      .then((data) => {
        dispatch(fetchProjectsSuccess(data));
      }).catch(err => {
        dispatch(fetchProjectFailure(err))
      });
  };
}

