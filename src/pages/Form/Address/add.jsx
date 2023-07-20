import React from "react";
import Footer from "../../../components/Footer";
import Statusbar from "../../../components/statusbar/status";

function Add() {
  return (
    <div>
      <div className="container">
        <a href="/">
          <img src="/images/shop.png" alt="loading" />
        </a>
        <hr />
      </div>
      <Statusbar/>
      <div className="container2">
        <h3>Select a delivery address</h3>
        <h4>Add a new address</h4>
        <div className="container2-content">
          <div className="container2-content-one">
            <label htmlFor="fname" className="login-head">
              Full name
            </label>
            <input
              type="text"
              name="fname"
              className="container2-contentinbox"
            />
            <label htmlFor="aname" className="login-head">
              Address
            </label>
            <input
              type="text"
              name="aname"
              className="container2-contentinbox"
            />
            <label htmlFor="tname" className="login-head">
              Town/City
            </label>
            <input
              type="text"
              name="tname"
              className="container2-contentinbox"
            />
          </div>
          <div className="container2-content-two">
            <label htmlFor="mname" className="login-head">
              Mobile number
            </label>
            <input
              type="number"
              name="mname"
              className="container2-contentinbox"
            />

            <label htmlFor="sname" className="login-head">
              State
            </label>
            <input
              type="text"
              name="sname"
              className="container2-contentinbox"
            />

            <label htmlFor="pname" className="login-head">
              Pincode
            </label>
            <input
              type="number"
              name="pname"
              className="container2-contentinbox"
            />
          </div>
        </div>
        <a href="/pay"><button className="button">Continue</button></a>
      </div>
      <Footer/>
    </div>
  );
}

export default Add;
