import React, { useEffect, useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { useNavigate } from "react-router-dom";
import Price from "../../../components/price";

function Cart() {
  const navigate = useNavigate();
  const [cartView, setCartview] = useState();

  useEffect(() => {
    setCartview(JSON.parse(localStorage.getItem("cartview")));
  }, []);

  const cartOut = (indexVal) => {
    if (indexVal > -1) {
      let cartcut = cartView.filter((val,index)=>index !== indexVal);
      setCartview(cartcut);
      localStorage.setItem("cartview", JSON.stringify(cartcut));
    }
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="cart-content">
          <div className="cart-content-left">
            <h3>Shop Cart</h3> 
            {cartView?.map((innerArray, INDEX)=>(
              <div key={INDEX}>
              {innerArray.map((item)=>(
                 <div className="cart-content-left-box" key={item.id}>
                 {" "}
                 <button className="cart-close" onClick={() => cartOut(INDEX)}>
                   &#x2715;
                 </button>
                 <div
                   className="cart-content-left-box-detail"
                   onClick={() => {
                     navigate(
                       `/detailpg/${item?.text}?id=${item?.id}`
                     );
                   }}
                 >
                   <div className="left-box-img">
                     <img
                       src={`/images/${item.image}`}
                       alt="loading"
                     />
                   </div>
                   <div className="left-box-detail">
                     <p>Price (1 item)</p>
                     <h5>{item.text}</h5>
                     <p>In stock</p>
                     <h5>{item.price}</h5>
                     <p>Delivery by Wed Aug 10 | Free₹40</p>
                     <select name="" id="">
                       <option value="0">Qty</option>
                       <option value="1">1</option>
                       <option value="2">2</option>
                       <option value="3">3</option>
                     </select>
                   </div>
                 </div>
               </div>
              ))}
              </div>
            ))}
          </div>
          <div className="cart-content-rig">
            <h3>Price Details</h3>
            <div className="cart-content-rig-box">
              <Price />
              <a href="/add">
                <button>Place to Order</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
