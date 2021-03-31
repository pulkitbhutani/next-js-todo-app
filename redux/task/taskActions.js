import {
  FETCH_TASK_REQUEST,
  FETCH_TASK_SUCCESS,
  FETCH_TASK_FAILURE,
  ADD_TASK,
} from "./taskTypes";

export const addTask = (id, title) => ({
  type: ADD_TASK,
  id,
  title,
});

export const fetchTaskRequest = (projectId) => ({
  type: FETCH_TASK_REQUEST,
  projectId,
});

export const fetchTaskSuccess = (payload) => ({
  type: FETCH_TASK_SUCCESS,
  payload,
});

export const fetchTaskFailure = (err) => ({
  type: FETCH_TASK_FAILURE,
  err,
});

export const fetchTasks = (projectId) => {
    console.log('fetch task project id - ', projectId);
  return (dispatch) => {
    dispatch(fetchTaskRequest(projectId));
    fetch(`http://localhost:3000/api/tasks/${projectId}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchTaskSuccess(data));
      })
      .catch((err) => {
        dispatch(fetchTaskFailure(err));
      });
  };
};
