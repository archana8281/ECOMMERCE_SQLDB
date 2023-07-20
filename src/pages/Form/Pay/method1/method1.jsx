import React from "react";

function Card({handleChange}) {
  return (
    <div className="paysection">
      <label htmlFor="fname" className="login-head">
        Name on Card
      </label>
      <input type="text" name="fname" className="container2-contentinbox" />
      <label htmlFor="mname" className="login-head">
        Card Number
      </label>
      <input type="number" name="mname" className="container2-contentinbox" />
      <div className="select-list">
        <div className="one">
          <label htmlFor="mname" className="login-head">
            Month
          </label>
          <select name="" class="select-optiion">
            <option value="">01</option>
            <option value="">02</option>
            <option value="">03</option>
            <option value="">04</option>
            <option value="">05</option>
            <option value="">06</option>
            <option value="">07</option>
            <option value="">08</option>
            <option value="">09</option>
            <option value="">10</option>
            <option value="">11</option>
            <option value="">12</option>
          </select>
        </div>
        <div className="one">
          <label htmlFor="mname" className="login-head">
            Year
          </label>         
          <select name="" class="select-optiion">
            <option value="">2023</option>
            <option value="">2022</option>
            <option value="">2021</option>
            <option value="">2020</option>
            <option value="">2019</option>
            <option value="">2018</option>
            <option value="">2017</option>
            <option value="">2016</option>
          </select>
        </div>
        <div className="one">
          <label for="phone" className="login-head">
            Cvv
          </label>
          <input type="number" name="cvv" class="select-optiion"/>
        </div>
      </div>
      <div className="p-btn">
        <a href="/fin">
          <button onClick={()=>{            
            handleChange('mmmm')}}>Pay ₹1,499 </button>
        </a>
      </div>
    </div>
  );
}

export default Card;
