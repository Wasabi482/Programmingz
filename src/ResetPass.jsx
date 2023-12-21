import React from "react";
import "./styles.css";

export default function Reset() {
  return (
    <>
      <div className="sidebar">
    <div className="logo"><img className="logoImage" src="logo.jpg"/></div>
    </div> 
    <img className="background" src="Graphic.png.svg"/>
    <div className="form">
      
        <form className="new-item-form">
          <h1 className="header">Reset Password</h1>
          <br />
          <label className="label-bold" htmlFor="password">
        Password
      </label>
      <input
        type="password"
        id="password"
      />
      <br />
      <label className="label-bold" htmlFor="confirm-password">
        Confirm Password
      </label>
      <input
        type="password"
        id="confirm-password"
      />
          <br />
          <button className="btn" type="submit">
            Reset Password
          </button>
          
        </form>
      </div>
     
    </>
  );
}
