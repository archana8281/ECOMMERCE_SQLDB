import React from "react";

function Net() {
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
            Valid Through
          </label>
          <input type="text" class="select-optiion" />
        </div>
        <div className="one">
          <label htmlFor="mname" className="login-head">
            CVV
          </label>
          <input type="number" name="mname" className="select-optiion" />
        </div>
      </div>
      <div className="p-btn">
        <a href="/fin">
          <button>Pay</button>
        </a>
      </div>
    </div>
  );
}

export default Net;
