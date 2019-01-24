import React  from 'react';
import {Button } from 'react-bootstrap';
const DeliveryStatus = (props) => {
 const handleDeliveryStateComplete=()=>{
    props.field.changeDeliveryStateHandler('completed',props.record.id)

    props.field.openModal('completed')
  }
  const handleDeliveryStatefailed=()=>{
    props.field.changeDeliveryStateHandler('failed',props.record.id)
    props.field.openModal('failed')
  }
  return (
    <div>
      {props.record.status === 'pending' ? <div>
        <Button bsStyle="primary" bsSize="xsmall" onClick={handleDeliveryStateComplete}>Completed</Button>
        <Button bsStyle="danger" bsSize="xsmall" onClick={handleDeliveryStatefailed }>Failed</Button>
      </div> : '---'}
      
    </div>
  );
}





export default (DeliveryStatus);