import React from 'react';
import {mount} from 'enzyme';
import  Root from '../Store/Config/StoreConfig';
import DeliveryTable from '../Component/DeliveryTable/DeliveryTable'; 
import moxios from 'moxios'

// beforeEach(()=>{
//     moxios.install();
//     moxios.stubRequest('https://api.myjson.com/bins/b9ix6',{
//         status:200,
//         response:[{name:'cc',namea:'xx'}]
//     })
// })
// afterEach(()=>{
//     moxios.uninstall();
// })
it('can fetch  all Deliveries Data',()=>{

   let DeliveriesData= []
const wrapper= mount(
    <Root>
    <DeliveryTable DeliveriesData/>
    </Root>
)

// moxios.wait(()=>{
//     wrapper.instance()
//     wrapper.update()
//     expect(wrapper.prop('DeliveriesData').length).toEqual(10);
//     done();
//     wrapper.unmount()
// })
})