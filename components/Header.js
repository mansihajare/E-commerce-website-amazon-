import React from 'react';
import "../componentCss/header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from "../StateProvider";



function Header() {

   const[{basket},dispatch] = useStateValue();

  return (
    <div className='header'>
      <Link to="/">
     <img className='header_logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
      </Link>
     {/* <img src='{require(../Img/16-167642_amazon-logo-amazon-logo-white-text.png)}'/> */}

     <div className='search'>
        <input className='header_search_input' type="text"/>
        <SearchIcon className="headerSearch_icon"/>
     </div>
     <div className='header_nav'>

      <div className='header_option'>
     <select className='language'>
      <option >English</option>
      <option >Marathi</option>
      <option >Hindi</option>
      <option >Kannada</option>
      <option >Tamil</option>
      <option >Chinese</option>
      <option >Spanish</option>
      <option >French </option>
      <option > Arabic</option>
      <option > Urdu</option>
      </select>
      </div>

     <Link to="login">
        <div className='header_option'>
            <span className='option1'>Hello Guest</span>
            <span className='option2'>Sign In</span>
        </div>
        </Link>
        {/* <div className='header_option'>
           <span className='option1'>Returns</span>
           <span className='option2'>& orders</span>
        </div> */}

        {/* <div className='header_option'>
           <span className='option1'>your</span>
           <span className='option2'>prime</span>
        </div> */}

      <div className='header_basketOption '  >
         <Link className='link' to="/checkout">
         <ShoppingBasketIcon/>
         <span className='option2 header_basketCount'>
            {basket?.length}
            {/* 9 */}
         </span>
         </Link>
        
      </div>
     </div>
    </div>
  )
}

export default Header
