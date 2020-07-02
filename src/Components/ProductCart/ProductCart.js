import React from 'react';
import './ProductCart.css';
import Quantity from '../Quantity/Quantity'
function ProductCart(props) {
   return (
      <div className="ProductCart">
         <div className="image-div">
            <img src={props.thumbnail} alt="Fruits"></img>
         </div>
         <div className="name-div">
            {props.name}
         </div>
         <div className="quantity-div">

            <Quantity id={props.id} price={props.price} quantity={props.max_quantity_per_order} handleDecreasedOnClick={props.handleDecreasedOnClick} handleIncreasedOnClick={props.handleIncreasedOnClick}></Quantity>

         </div>
      </div>
   );
}
export default ProductCart;