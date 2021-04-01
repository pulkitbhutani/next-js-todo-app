import {
  FETCH_PROJECTS,
  ADD_PROJECT,
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS_FAILURE,
  DELETE_PROJECT,
} from "./projectTypes";

const initialState = [];

const projectReducer = (state = initialState, action) => {
  console.log("project reducer action - ", action);
  switch (action.type) {
    case FETCH_PROJECTS_REQUEST:
      return { ...state, loading: true };
    case FETCH_PROJECTS:
      return { loading: false, projects: action.payload, error: "" };
    case FETCH_PROJECTS_FAILURE:
      return { loading: false, projects: [], error: action.payload };
    case ADD_PROJECT:
      state.projects = [
        ...state.projects,
        { id: action.id, title: action.title, userId: action.userId },
      ];
      return { ...state };
    case DELETE_PROJECT:
      state.projects = state.projects.filter((project) => project.id !== action.id);
      return { ...state };
    default:
      return state;
  }
};

export default projectReducer;
