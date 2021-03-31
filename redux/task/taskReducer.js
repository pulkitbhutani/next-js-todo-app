import {
  FETCH_TASK_REQUEST,
  FETCH_TASK_SUCCESS,
  FETCH_TASK_FAILURE,
  ADD_TASK,
} from "./taskTypes";

const initialState = [];

const taskReducer = (state = initialState, action) => {
    console.log('task reducer action - ', action);
  switch (action.type) {
    case FETCH_TASK_REQUEST:
      return { ...state, loading: true, projectId: action.projectId };
    case FETCH_TASK_SUCCESS:
      return { loading: false, tasks: action.payload, error: "" };
    case FETCH_TASK_FAILURE:
      return { loading: false, tasks: [], error: action.payload };
    case ADD_TASK:
      return [...state, { id: action.id, title: action.title }];
    default:
      return state;
  }
};

export default taskReducer;
