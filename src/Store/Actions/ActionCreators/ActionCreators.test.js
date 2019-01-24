import {addTasks , updateTaskStatus} from '../ActionTypes'
describe('addTasks and updateTaskStatus',()=>{
  it('has the correct type',()=>{
      const action=addTasks
      expect(action).toEqual("addTasks")
  }) ; 
  it('has the correct type',()=>{
    const action=updateTaskStatus
    expect(action).toEqual("updateTaskStatus")

  })
})