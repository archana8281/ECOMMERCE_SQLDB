import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/navbar";
import Footer from "../../components/Footer";

function contact() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="details">
        <h2 className="details-head">
          <u>Contact Us</u>
        </h2>
        <p>
          Online Technologies Private Limited, CIN: U749045hhh5jidnb234
          06-105-B, 06-102, (138 Wu) Vaishnavpurii Signature, No. 75/9, Outer
          Ring Road, Bellandur, Varthur Hobli, Bengaluru-560103, Karnataka,
          India E-mail address: query@shopindeed.com
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default contact;
