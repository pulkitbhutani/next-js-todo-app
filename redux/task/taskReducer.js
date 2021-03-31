import { markAssetError } from "next/dist/client/route-loader";
import {
  FETCH_TASK_REQUEST,
  FETCH_TASK_SUCCESS,
  FETCH_TASK_FAILURE,
  ADD_TASK,
  TOGGLE_TASK_COMPLETED
} from "./taskTypes";

const initialState = [];

const taskReducer = (state = initialState, action) => {
    console.log('task reducer action - ', action);
  switch (action.type) {
    case FETCH_TASK_REQUEST:
      return { ...state, loading: true, projectId: action.projectId };
    case FETCH_TASK_SUCCESS:
      return { loading: false, tasks: action.payload, error: "", selectedProjectId: action.selectedProjectId, selectedProjectTitle: action.selectedProjectTitle };
    case FETCH_TASK_FAILURE:
      return { loading: false, tasks: [], error: action.payload };
    case ADD_TASK:
      state.tasks = [...state.tasks, {id: action.id, title: action.title, completed : action.completed, projectId: action.projectId}]
      return {...state};
    case TOGGLE_TASK_COMPLETED:
      return state.tasks.map((todo)=>{
        if(todo.id !== action.id) {
          return todo
        }
        return {
          ...todo,completed:!todo.completed,
        }
      })
    default:
      return state;
  }
};

export default taskReducer;
