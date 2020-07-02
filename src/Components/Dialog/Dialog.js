import React from 'react'
import Quantity from '../Quantity/Quantity'
import './Dialog.css';
function Dialog(props) {
   console.log("Dialog info:",props.selectedItemsArray)
   return (
      props.selectedItemsArray.map((item,index) =>{         
         return(
         <div key={index}>
           <div className="cart-dialogue">
               <img src={item.thumbnail} alt="fruit"/>
               {item.name}
           </div>      
           <div className="count-dialogue">
           <Quantity id={item.id} price={item.price}  quantity={item.max_quantity_per_order} handleDecreasedOnClick={props.handleDecreasedOnClick} handleIncreasedOnClick={props.handleIncreasedOnClick}></Quantity>
         </div >   

         </div>)
         
        })
   )
}

export default Dialog
