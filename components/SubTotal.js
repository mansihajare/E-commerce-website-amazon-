import React from 'react';
import "../componentCss/subtotal.css";
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from '../reducer';


function SubTotal() {

  const addtobasket=()=>{
  //  dispatch item inton datalayer
  
  }
  const[{basket},dispatch] = useStateValue();

  return (
    <div className='Subtotal'>
      <CurrencyFormat
      renderText={(value)=>(
        <>
        <p>
          Subtotal ({basket.length} items) : <strong>{value}</strong>
          
        </p>
        <small className='subtotal_gift'>
          <input type="checkbox"/> this order contain a gift 
        </small>
        </>
      )}
      decimalScale={2}
      value={getBasketTotal(basket)}
      displayType = {"text"}
      thousandSeperator={true}  
      prefix = {"$"}
      />
     <button onClick={addtobasket}>proceed to checkout</button>
    </div>
  )
}

export default SubTotal
