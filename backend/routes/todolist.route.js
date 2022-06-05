import express from 'express'; 
import {getLists, getList, createList, updateList, deleteList} from '../controllers/todolist.controller.js';

const router = express.Router(); 

router.get('/', getLists); 

router.get('/:listId', getList); 

router.post('/', createList); 

router.put('/', updateList); 

router.delete('/:listId', deleteList);    

export default router; 

// router.patch('/:listId', patchList); 