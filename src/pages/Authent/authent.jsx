import React, { useState } from "react";

function LOGIN() {
  const [data ,setData]=useState({})

  const getData = (e) =>{
     setData({...data,[e.target.name] :e.target.value})
  }
  console.log({data});
    return (
    <div className="login-box">
      <img src="/images/image 27.png " alt="loading" />
      <h2>Sign Up or Login</h2>
      <div className="login-box-con">
        <label htmlFor="mail" className="login-head">
          Email or mobile phone number
        </label>
        <input type="email" namm="mail" className="inbox-one" onChange={getData} name="mail" required />
        <div className="name">
          <div className="name-part1">
            <label htmlFor="fname" className="login-head">
              Full Name
            </label>
            <input type="text" className="inbox-two" onChange={getData} name="fname" required />
          </div>
          <div className="name-part2">
            <label htmlFor="uname" className="login-head">
              User Name
            </label>
            <input type="text" className="inbox-two" onChange={getData} name="uname" required />
          </div>
        </div>
        <label htmlFor="password" className="login-head">
          Password
        </label>
        <input type="password"  className="inbox-one" onChange={getData} name="pass" required />
        <p className="login-box-para">
          By continuing, you agree to shop indeedConditions of Use and{" "}
          <a className="login-box-a">Privacy Notice.</a>
        </p>
        <a href="/">
          <button className="login-btn">Continue</button>
        </a>
        <span>Need Help</span>
      </div>
    </div>
  );
}

export default LOGIN;
