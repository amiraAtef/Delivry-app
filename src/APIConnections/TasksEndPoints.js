import axios from 'axios';


const  TasksEndPoint = 'https://api.myjson.com/bins/b9ix6';

export const GetTasks = () => {
    return new Promise((resolve,reject) => {
        axios.get(TasksEndPoint).then((response) => {
            if(response.data.tasks)
            {
                resolve(response.data.tasks);
            }else{
                resolve({ error: 'No tasks Found'})
            }
        }).catch(error => reject(error))
    })
}