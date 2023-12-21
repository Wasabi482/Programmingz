import React, {} from 'react';
import "./styles.css"

export default function Forgot(){
  return(
    <>
    <div className="sidebar">
    <div className="logo"><img className="logoImage" src="logo.jpg"/></div>
    </div> 
    <img className="background" src="Graphic.png.svg"/>
    <a className="create-account" href="./index.html">Sign in to your acount</a> 

    <div className="form">
    <form className="new-item-form">
      <h1 className="header">FORGOT YOUR PASSWORD?</h1>
      <p className="sub-header">Fear not! We'll email you instructions on how to reset your password.</p>
      <br />
      <label className="label-bold" htmlFor="username">
        Email Address
      </label>
      <input
        type="text"
        id="username"
      />
      <br />
  
    
      <button className="btn" type="submit"><a className="link" href="./ResetPass.html">
        Reset Password
        </a></button>
    
    </form>
    </div>
  </>
  
);
  
}