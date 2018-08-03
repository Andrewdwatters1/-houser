import React from 'react';

export default function House(props) {
  return(
    <div>
      <p>Property Name: {props.name} <br/>
         Address: {props.address} <br/>
         City: {props.city} <br/>
         State: {props.state} <br/>
         Zip: {props.zip} <br/>
         </p>
    </div>
  )
}