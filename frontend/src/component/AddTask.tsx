import React from 'react'; 
import axios from 'axios'; 
import {useState} from 'react'; 
import Button from 'react-bootstrap/Button';

type AddTaskProps = {
    updateTask: any; 
}

const AddTask = ({updateTask} : AddTaskProps) => {

    
  const [task_id, setTask_id] = useState(0); 
  const [task_name, setTask_name] = useState(""); 

  const [tasks, setTasks] = useState([]);
  const [addingtasks, setAddingtasks] = useState(false); 

    const addTask = async () => {
        const newTask = {
          id: task_id,
          name: task_name
        }
        const { data } = await axios.post(`http://localhost:5000/lists`, newTask);
        setTasks(data); 
        setAddingtasks(false); 
      }

    return(
        <div className="App">
        <Button variant="secondary" onClick={() => setAddingtasks(true)}>Ajouter une tâche</Button>

        { addingtasks && 
          <div>
            Name : <input type="text" onChange={(e) => setTask_name(e.target.value)}/>
            <Button variant="secondary" onClick={() => addTask}>Ajouter</Button>
          </div>
        
        } 
    </div>
    )
}

export default AddTask; 