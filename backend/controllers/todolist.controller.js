import * as ListsService from '../services/todolist.service.js'; 

export const getLists = async (req, res) => {
    try {
        const lists = await ListsService.getLists();
        return res.status(200).json(lists);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

export const getList = async (req, res) => {
    try {
        const { listId } = req.params;
        const list = await ListsService.getList(listId);
        return res.status(200).json({ status: 200, data: student, message: `List with id ${listId} succesfully retrieved` });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

export const createList = async (req, res) => {
    try {
        const listToCreate = req.body;
        const lists = await ListsService.createList(listToCreate);
        return res.status(200).json({ status: 200, data: lists, message: "Succesfully Lists Retrieved" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

export const updateList = async (req, res) => {
    try {
        const listUpdated = await ListsService.updateList(req.body);
        return res.status(200).json({ status: 200, data: listUpdated, message: `List with id ${req.body.listId} succesfully updated` });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

export const deleteList = async (req, res) => {
    try {
        const { listId } = req.params;
        await ListsService.deleteList(listId);
        return res.status(200).json({ status: 204, message: `List with id ${listId} succesfully deleted` });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}