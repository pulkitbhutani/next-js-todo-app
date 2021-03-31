import Project from '../../components/Project'
import Task from '../../components/Task'
import { useEffect } from "react";
import { useDispatch } from 'react-redux'
import {fetchProjects} from '../../redux/projects/projectActions';

function Todo() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProjects());
  },[])

  return (
    <div className="grid grid-cols-3 gap-10">
      <div className="..."><Project/></div>
      <div className="col-span-2 ..."><Task/></div>   
    </div>
  );
}


export default Todo;
