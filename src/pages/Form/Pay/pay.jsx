import React from "react";
import Price from "../../../components/price";
import Footer from "../../../components/Footer";
import Card from "./method1/method1";
import { useState } from "react";
import UPI from "./method2/UPI";
import Cash from "./method3/cash";
import Net from "./method4/net bank";
import Statusbar from "../../../components/statusbar/status";

function PAY() {
  const [pay, setPay] = useState("card");

  const handleClick = (type) => {
    setPay(type);
  };
  const handleChange = (vl) => {
    console.log({vl});
    
  }
  return (
    <div>
      <div className="container">
        <a href="/">
          <img src="/images/shop.png" alt="loading" />
        </a>
        <hr />
      </div>
      <Statusbar step={3}/>
      <div className="container2">
        <h3>Selected Payement Method</h3>
        <div className="container2-content">
          <div className="container2-content-one">
            <div className="content-one-head">
              <a
                className={pay === "card" ? "pay-btna" : "pay-btn"}
                onClick={() => handleClick("card")}
              >
                Credit Card
              </a>
              <a
                className={pay === "upi" ? "pay-btna" : "pay-btn"}
                onClick={() => handleClick("upi")}
              >
                UPI
              </a>
              <a
                className={pay === "cash" ? "pay-btna" : "pay-btn"}
                onClick={() => handleClick("cash")}
              >
                Cash on Delivery
              </a>
              <a
                className={pay === "net" ? "pay-btna" : "pay-btn"}
                onClick={() => handleClick("net")}
              >
                Net Banking
              </a>
            </div>

            {(() => {
              switch (pay) {
                case "card":
                  return <Card handleChange={handleChange} />;
                case "upi":
                  return <UPI />;
                case "cash":
                  return <Cash />;
                case "net":
                  return <Net />;
                default:
                  return null;
              }
            })()}
          </div>
          <div className="container2-content-two">
            <div className="container2-content-two-box">
              <Price />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PAY;
