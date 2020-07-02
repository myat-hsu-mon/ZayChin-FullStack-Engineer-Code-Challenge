import React from 'react'
import './Dialog.css';
import { Button } from 'react-bootstrap';
function Dialog(props) {
   let newArray;
   console.log("Dialog info:", props.selectedItemsArray)
   if (props.totalKyats) {
      return (
         <div>
            {
               newArray = props.selectedItemsArray.map((item, index) => {
                  if (item.max_quantity_per_order) {
                     return (
                        <div key={index}>

                           <div>
                              <div className="cart-dialogue">
                                 <img src={item.thumbnail} alt="fruit" />
                                 {item.name}
                              </div>

                              <div className="count-dialogue">
                                 <div>
                                    <h6>{item.price * item.max_quantity_per_order} ks</h6>
                                    <Button className="minus" variant="outline-secondary" size="sm" onClick={() => props.handleDecreasedOnClick(item.id)}>-</Button>
                                    <p className="count">{item.max_quantity_per_order}</p>
                                    <Button className="plus" variant="outline-secondary" size="sm" onClick={() => props.handleIncreasedOnClick(item.id)}>+</Button>
                                 </div>
                              </div >
                           </div>

                        </div>
                     );//end of return
                  }

               })//end of map
            }

            <p className="total">TotalCosts - {props.totalKyats} Ks</p>

         </div>
      )
   } else {   //end of totalKyats if
      return null;
   }

}

export default Dialog

{/* <Quantity id={item.id} price={item.price}  quantity={item.max_quantity_per_order} handleDecreasedOnClick={props.handleDecreasedOnClick} handleIncreasedOnClick={props.handleIncreasedOnClick}></Quantity> */ }
