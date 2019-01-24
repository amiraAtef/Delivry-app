import React from 'react';
import {mount} from 'enzyme';
import DeliveryTable from './DeliveryTable';
import  Root from '../../Store/Config/StoreConfig';

let wrapper ;

beforeEach(()=>{
    wrapper=mount(<Root><DeliveryTable/></Root>)
})
afterEach(()=>{
    wrapper.unmount()
})
it('sort desc or asce happen',()=>{
    wrapper.find('Button').at(0).simulate('click')
     wrapper.find('Button').at(1).simulate('click')
    wrapper.update()
})