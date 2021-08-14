import React, {useState} from 'react'
import { Link } from "react-router-dom";
import "./Login.css"
import ButtonPrimary from "./ButtonPrimary"
import ButtonSecondary from "./ButtonSecondary";

import LanguageIcon from '@material-ui/icons/Language';

 function Login (){

  const [email, setemail]= useState('');
  const [password, setpassword]= useState('');

  const signIn = (e) =>{
    e.preventDefault();
  }

  return (
    <div className= "login">
      <div className= "login__header">
        <div className= "login__logo">
          <Link to = "/">
            <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ElLEkXb6fBdHDuEcFHKlB_72gpiyDb2A2g&usqp=CAU"
            alt="#"/>
          </Link>
        </div>
        <div className= "login__lang">
          <LanguageIcon /><span>en-US</span>
        </div>
      </div>
      <div className ="login__info">
        <h1>Sign In</h1>
        <form className= "login__form">
          <label htmlFor = "email">Email Address</label>
          <input type ="email" id = "email" value = {email}
          onChange={(e) => setemail(e.target.value)} />
          <label htmlFor = "password">Password</label>
          <input type ="password" id = "password" value = {password}
          onChange={(e) => setpassword(e.target.value)} />
          <ButtonPrimary name = 'Sign In' type = "submit" onClick = {signIn} />

        </form>

      </div>
    </div>
  )
}
export default Login