import deliveryReducer from './Delivery'
import{addTasks,updateTaskStatus} from '../Actions/ActionTypes'
it('handel  addTasks ',()=>{
    const action ={
        type:addTasks,
        PayLoad:{
            Tasks:[{}]
        }
    }
    const newState=deliveryReducer([],action)
    expect(newState).toEqual( {"tasks": [{"id": 0}]})
})
