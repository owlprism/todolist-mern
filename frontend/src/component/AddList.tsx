import React from 'react'; 
import axios from 'axios'; 
import {useState} from 'react'; 
import Button from 'react-bootstrap/Button';

type AddListProps = {
    updateList: any; 
}

const AddList = ({updateList} : AddListProps) => {

    
  const [list_id, setList_id] = useState(0); 
  const [list_name, setList_name] = useState(""); 

  const [lists, setLists] = useState([]); 
  const [addinglists, setAddinglists] = useState(false); 

    const addList = async () => {
        const newList = {
          id: list_id,
          name: list_name
        }
        const { data } = await axios.post(`http://localhost:5000/lists`, newList);
        setLists(data); 
        setAddingLists(false); 
      }

    return(
        <div className="App">
        <Button variant="secondary" onClick={() => setAddingLists(true)}>Ajouter une Liste</Button>

        { addinglists && 
          <div>
            Name : <input type="text" onChange={(e) => setList_name(e.target.value)}/>
            <Button variant="secondary" onClick={() => addinglists()}>Ajouter</Button>
          </div>
        
        } 
    </div>
    )
}

export default AddList; 