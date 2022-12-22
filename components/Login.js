import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "../componentCss/login.css";
import{auth} from '../firebase';


function Login() {

  const[password,setPassword] = useState('');
  const [email,setEmail] = useState('');

  const signIn = e =>{
  e.preventDefault();
  }

  const register = e =>{
    e.preventDefault();
    auth
    .createUserWithEmailAndPassword(email,password)
    .then((auth)=>{
      // successfult created user with email and password
      // console.log(auth);

      if(auth){
        history.pushState('/')
      }
    })
    .catch(error=>alert(error.message))
  }
  return (
    <div className='login'>
    <Link to="/">
      {/* <img className='login_logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'> */}
      <img className='login_logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF2CbvcSjC_CFimVjIq9wxBNlGwNL8HTzPvg&usqp=CAU'>
        </img> 
    </Link>
    <div className='login_container'>
        <h1>Sign In</h1>
        <form>
            <h5>Email-Id</h5>
            <input type="text" value={email} onChange={e=>setEmail(e.target.value)}></input>
            <h5>password</h5>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)}></input>

            <button type='submit' onClick={signIn} className='login_sihnIn_btn'>Sign In</button>
        </form>

        <p>By signing-in you agree to amazon clone conditions of use & sale.please see our privacy notice ,coockie notice ans our intrest based Ads notice </p>
        <button onClick={register}  className='login_register_btn'>create your amazon account</button>
    </div>
    </div>  
  )
}

export default Login
