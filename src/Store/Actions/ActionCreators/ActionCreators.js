import * as ActionTypes from '../ActionTypes';
import {GetTasks} from '../../../APIConnections/TasksEndPoints';

const addTasks = (Tasks) => {
    return  {
        type: ActionTypes.addTasks,
        PayLoad: {
            Tasks
        }
    }
}

export const changeTaskState = (value,id) => {
    return {
        type: ActionTypes.updateTaskStatus,
        PayLoad: {
            newStatusValue: value,
            id
        }
    }
}

export const getTasksAsync = () => {
    return (Dispatcher) => {
        
        GetTasks().then((response) => {
            if(Array.isArray(response))
            {
                Dispatcher(addTasks(response))
            }
        })
    }
}
