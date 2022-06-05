import List from '../models/todolist.model.js'; 
import mongoose from 'mongoose';

const getLists = async () => {
    try {
        return await List.find();
    } catch (e) {
        console.log(e); 
        throw Error('Error while fetching list.');
    }
}

const getList = async (listId) => {
    try {
        return await List.findbyId({listId});
    } catch (e) {
        console.log(e); 
        throw Error('Error.');
    }
}

const createList = async (listToCreate) => {
    try {
        const newList = new List(listToCreate);
        await newList.save();
        return getLists();
    } catch (e) {
        console.log(e); 
        throw Error('Error.');
    }
}

const updateList = async (listToUpdate) => {
    try {
        await List.findOneAndUpdate(listToUpdate);
        return listToUpdate;
    } catch (e) {
        console.log(e); 
        throw Error('Error.');
    }
}

const deleteList = async (listId) => {
    try {
        await List.deleteOne({_id: listId});
    } catch (e) {
        console.log(e); 
        throw Error('Error.');
    }
}

export {getLists, getList, createList, updateList, deleteList}