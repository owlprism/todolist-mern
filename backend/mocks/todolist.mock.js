import { v4 as uuidv4 } from 'uuid';

export let lists = [
    {
      _id: uuidv4(),
      name: "DOE",
      tasks:[
          {
              taskId:uuidv4(),
              label:"tache 1",
              done: true,
          },
          {
            taskId:uuidv4(),
            label:"tache 2",
            done: false,
        }
      ]
    },
  ];