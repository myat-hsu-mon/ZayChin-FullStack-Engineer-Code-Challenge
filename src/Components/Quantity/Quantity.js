import React, { useState } from 'react';
import './Quantity.css';
import { Button } from 'react-bootstrap'
function Quantity(props) {
   // console.log("inside quantity", props)
   return (
      (props.quantity) ?
         <div>
            <h6>{props.price} ks</h6>
            <Button className="minus" variant="outline-secondary" size="sm" onClick={() => props.handleDecreasedOnClick(props.id)}>-</Button>
            <p>{props.quantity}</p>
            <Button className="plus" variant="outline-secondary" size="sm" onClick={() => props.handleIncreasedOnClick(props.id)}>+</Button>
         </div>
         :
         <div>
            <h6>{props.price} ks</h6>
            <Button variant="outline-secondary" size="sm" onClick={() => props.handleIncreasedOnClick(props.id)}>Add to cart</Button>
         </div>

   );
}
export default Quantity;