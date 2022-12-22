import React from 'react';
import '../componentCss/CheckoutProduct.css';
import {useStateValue} from '../StateProvider'

function CheckoutProduct({ id, title, image, price, rating}) {

    const[{basket},dispatch]=useStateValue();

    const removeFromBasket=()=>{
         dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id
         })
    }

  return (
    <div className='CheckoutProduct'>
      <img className='CheckoutProduct_img' src={image}/>
      <div className='CheckoutProduct_info'>
        <p className='CheckoutProduct_title'>{title}</p>
        <p className='CheckoutProduct_price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className='CheckoutProduct_rating'>
        {Array(rating)
            .fill()
            .map((_, i) => (
            //   <p>🌟</p>
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from the basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
