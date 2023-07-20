import React from "react";
import Statusbar from "../../../../components/statusbar/status";
import Footer from "../../../../components/Footer";

function Finial() {
  return (
    <div>
      <div className="container">
        <a href="/">
          <img src="/images/shop.png" alt="loading" />
        </a>
        <hr />
      </div>
      <Statusbar />
      <div className="fin-content">
        <h3>Complete payement</h3>
        <img src="/images/icons/tik.png" alt="loading" />
        <h3>Order placed thank you</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br />
          Lorem Ipsum has been the industry's standard dummy
        </p>
        <h5>Delivery by August 18, 2022</h5>
        <a href="/">
          <button className="boxbutton">Continue Shopping</button>
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default Finial;
