import React, {} from 'react';
import"./styles.css"

export default function Login() {
  return (
  <>
  <div className="sidebar">
      <div className="logo"><img className="logoImage" src="logo.jpg"/></div>
    </div> 
    <img className="background" src="Graphic.png.svg"/>
    <a className="create-account" href="createAccount.jsx">Create an Account</a> 

    <div className="form">
    <form className="new-item-form">
      <h1 className="header">SIGN IN TO FLOOD MONITORING SYSTEM</h1>
      <br />
      <label className="label-bold" htmlFor="username">
        Email or Mobile
      </label>
      <input
        type="text"
        id="username"
      />
      <br />
      <label className="label-bold" htmlFor="password" >
        Password
        <span></span>
        <a className="forgotPass" href="./ForgotPass.html">
          Forgot Password?
        </a>
      </label>
      <input
        type="password"
        id="password"
      />
      <label htmlFor="rememberMe">
        <input
          className="checkbox"
          type="checkbox"
          id="rememberMe"
        />
        Remember Me
      </label>
      <br />
      <button className="btn" type="submit">
        Sign in
      </button>

      <div className="or-separator">
        <hr className="separator" />
        <p className="or-text">Or</p>
        <hr className="separator" />
      </div>
      <div className="otherSignIn">
        <button className=" google">Sign in with Google</button>
        <button className=" apple">Sign in with Apple</button>
      </div>
    </form>
    </div>
  </>
);
  
}

