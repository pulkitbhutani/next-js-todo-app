  
import { combineReducers } from 'redux'
import projectReducer from './projects/projectReducer'
import taskReducer from './task/taskReducer'

const rootReducer = combineReducers({
  projects: projectReducer,
  tasks: taskReducer
});

export default rootReducer;