import React from "react";
import { Offer } from "../../utils/offer";

function OFFER() {
  return (
    <div>
      <div className="container" id="topoffer_section" >
        <h3>Top Offer</h3>
        <hr className="top-line" />
        <div className="top-list">
          {Offer.map((item)=>(
            <div className="item">
              <img src={item.image} alt="loading" />
              <div className="item-content">
               {item.title}
              <h6>{item.off}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OFFER;
