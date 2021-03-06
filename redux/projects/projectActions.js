import { FETCH_PROJECTS, ADD_PROJECT, FETCH_PROJECTS_REQUEST, FETCH_PROJECTS_FAILURE, DELETE_PROJECT } from "./projectTypes";
import {API_LINK} from "../../utility/constants"

export const addProject = (id, title, userId) => ({
  type: ADD_PROJECT,
  id,
  title,
  userId
});

export const deleteProjectSuccess = (id) => ({
  type: DELETE_PROJECT,
  id,
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
  fetch( `${API_LINK}/projects`)
      .then(response => response.json())
      .then((data) => {
        dispatch(fetchProjectsSuccess(data));
      }).catch(err => {
        dispatch(fetchProjectFailure(err))
      });
  };
}

export const deleteProject = (projectId) => {
  return fetch(`${API_LINK}/projects/deleteProject/${projectId}`, {
     method: "DELETE",
   })
     .then((data) => data.json())
     .then((res) => {
       console.log(res);
       return res;
     });
 };

