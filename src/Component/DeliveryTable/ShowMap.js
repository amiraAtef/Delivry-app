import React  from 'react';
import {Button } from 'react-bootstrap';
const ShowMap = (props) => {
  return (
    <div>
        <Button bsStyle="info" bsSize="small" onClick={()=>props.field.mapVisible(props.record.id)}>Show path on map</Button>
      
    </div>
  );
}





export default (ShowMap);