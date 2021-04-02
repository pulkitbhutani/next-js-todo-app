import {
  FETCH_TASK_REQUEST,
  FETCH_TASK_SUCCESS,
  FETCH_TASK_FAILURE,
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_TASK_COMPLETED,
} from "./taskTypes";
import {API_LINK} from "../../utility/constants"


export const addTask = (id, title, completed, projectId) => ({
  type: ADD_TASK,
  id,
  title,
  completed,
  projectId,
});

export const deleteTaskSuccess = (id) => ({
  type: DELETE_TASK,
  id,
});


export const fetchTaskRequest = (projectId) => ({
  type: FETCH_TASK_REQUEST,
  projectId,
});

export const fetchTaskSuccess = (
  payload,
  selectedProjectId,
  selectedProjectTitle
) => ({
  type: FETCH_TASK_SUCCESS,
  payload,
  selectedProjectId,
  selectedProjectTitle,
});

export const fetchTaskFailure = (err) => ({
  type: FETCH_TASK_FAILURE,
  err,
});

export const toggleTaskCompletedSuccess = (id) => ({
  type: TOGGLE_TASK_COMPLETED,
  id,
});

export const fetchTasks = (selectedProjectId, selectedProjectTitle) => {
  console.log("fetch task project id - ", selectedProjectId);
  return (dispatch) => {
    dispatch(fetchTaskRequest(selectedProjectId));
    fetch(`${API_LINK}/tasks/${selectedProjectId}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(
          fetchTaskSuccess(data, selectedProjectId, selectedProjectTitle)
        );
      })
      .catch((err) => {
        dispatch(fetchTaskFailure(err));
      });
  };
};

export const toggleTaskCompleted = (taskId, completed) => {
   return fetch(`${API_LINK}/tasks/updateTask/${taskId}`, {
      method: "POST",
      body: JSON.stringify({
        completed: !completed,
      }),
    })
      .then((data) => data.json())
      .then((res) => {
        return res;
      });
  };

  export const deleteTask = (taskId) => {
    return fetch(`${API_LINK}/tasks/deleteTask/${taskId}`, {
       method: "DELETE",
     })
       .then((data) => data.json())
       .then((res) => {
         console.log(res);
         return res;
       });
   };
