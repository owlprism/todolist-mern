import axios from 'axios'; 
import React, {useState, useEffect} from 'react'; 
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form';  
// import AddList from './component/AddList.tsx'; 
// import AddTask from './component/AddTask.tsx'; 
// import ListSelector from './component/ListSelector.tsx';
// import Task from './component/Task.tsx'; 
// import Tasks from './component/Tasks.tsx'; 
// import TasksFilter from './component/TasksFilter.tsx';  



function App() {

  // const fetchLists = async () => {
  //   const { data } = await axios.get(`http://locahost:5000/lists/`); 
  //   setLists(data); 
  // }



  // const deleteList = async () => {
  //   axios.delete(`http://localhost:5000/lists/${list_id}`); 
  //   const updateLists = lists.filter((list) => list._id !== list_id); 
  //   setLists(updateLists); 
  // }

  return (
    <div>  <p className='title'>TO DO LIST</p>
      <div className="box"> 
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Renseigner une nouvelle liste"
            aria-label="new-list"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            Ajouter
          </Button>
        </InputGroup>

        <Form.Select aria-label="Default select example">
          <option>Listes disponibles</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>

        <Form.Select aria-label="Default select example" className="tache">
          <option>Tâches disponibles</option>
          <option value="1"> 
            <Form>
                {['checkbox'].map((type) => (
                  <div key={type} className="mb-3">
                    <Form.Control as="check" type={type} id={`check-api-${type}`}>
                      <Form.Check.Input type={type} isValid />
                    </Form.Control>
                  </div>
                ))}
              </Form> One 
            <Button variant="danger" size="sm"> X </Button> 
          </option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </div>
    </div>
   
    // <AddList/>
    // <AddTask/>
  )
}

export default App;