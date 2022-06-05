import axios from 'axios'; 
import React, {useState, useEffect} from 'react'; 
import Button from 'react-bootstrap/Button';
import AddList from './component/AddList.tsx'; 
import AddTask from './component/AddTask.tsx'; 
import ListSelector from './component/ListSelector.tsx';
import Task from './component/Task.tsx'; 
import Tasks from './component/Tasks.tsx'; 
import TasksFilter from './component/TasksFilter.tsx';  



function App() {

  const [tasks, setTasks] = useState([]);
  const [addingtasks, setAddingtasks] = useState(false); 

  const fetchLists = async () => {
    const { data } = await axios.get(`http://locahost:5000/lists/`); 
    setLists(data); 
  }



  const deleteList = async () => {
    axios.delete(`http://localhost:5000/lists/${list_id}`); 
    const updateLists = lists.filter((list) => list._id !== list_id); 
    setLists(updateLists); 
  }

  return (
    <AddList></AddList>
  )
}

export default App;