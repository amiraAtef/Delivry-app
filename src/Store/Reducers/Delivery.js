import * as ActionTypes from '../Actions/ActionTypes';

const initialState = {
    tasks: [],
    currentStatus:'',
    selectedFromLocation:"0",
    selectedToLocation:"0"

}

const DeliveryReducer = (state = initialState, action) => {
    if (action.type === ActionTypes.addTasks) {
        return {
            ...state,
            tasks: action.PayLoad.Tasks.map((task, index) => {
                return {
                    ...task,
                    id: index
                }
            })
        }
    }
    else if (action.type === ActionTypes.updateTaskStatus) {
        let tasksClone = state.tasks.map(task => { 
            if (task.id === action.PayLoad.id) {
                return{
                    ...task,
                    status:action.PayLoad.newStatusValue 
                }
            
            }
            else{
                return {
                    ...task
                }
            }
        });

        return{
            ...state,
            tasks: tasksClone,
            currentStatus:action.PayLoad.newStatusValue
        }
        


    }
    return state;
}

export default DeliveryReducer;