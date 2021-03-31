import {
  FETCH_PROJECTS,
  ADD_PROJECT,
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS_FAILURE,
} from "./projectTypes";

const initialState = [];

const projectReducer = (state = initialState, action) => {
  console.log('project reducer action - ', action);
  switch (action.type) {
    case FETCH_PROJECTS_REQUEST:
      return { ...state, loading: true };
    case FETCH_PROJECTS:
      return { loading: false, projects: action.payload, error: "" };
    case FETCH_PROJECTS_FAILURE:
      return { loading: false, projects: [], error: action.payload };
    case ADD_PROJECT:
      return [...state, { id: action.id, title: action.title }];
    default:
      return state;
  }
};

export default projectReducer;
