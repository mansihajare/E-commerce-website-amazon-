import React from 'react';
import "../componentCss/checkout.css";
import SubTotal from './SubTotal';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from './CheckoutProduct';

function CheckOut() {
  const[{basket},dispatch] = useStateValue();

  return (
    <div className='checkout'>
        <div className='checkout_left'>
            <img className='checkout_ad' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5cJZy3DRMv0JFlski0_F_orzZURJqljTkw&usqp=CAU'/>
            <h3>Hello,user</h3>
            <h2 className='checkout_title'>your shoping basket</h2>
            {basket.map(item =>(
              <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              />
            ))}
        </div>

        <div className='checkout_right'>
          
            <SubTotal></SubTotal>
        </div>
    </div>
  )
}

export default CheckOut
