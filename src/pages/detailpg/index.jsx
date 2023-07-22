import React from "react";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { DETA, COLOR } from "../../utils/offer";
import { useSearchParams, useParams, useNavigate } from "react-router-dom";
import Similar from "../../components/Similarproduct";

function Index() {
  const path = `C:/xampp/htdocs/ecommerce_db/public/images/`;
  // const path = `c:\xampp\htdocs\ecommerce_db\public\images`;

  const navigate = useNavigate();
  const [brandItem, setbrandItem] = useState();
  let [searchParams, setSearchParams] = useSearchParams();
  let { id } = useParams();
  const addCart = () => {
    navigate("/cartpg");
    let array = JSON.parse(localStorage.getItem("cartview")) ?? [];
    array.unshift(brandItem);
    localStorage.setItem("cartview", JSON.stringify(array));
  };

  useEffect(() => {
    const brandFetch = async () => {
      const response = await fetch(
        `http://localhost/ecommerce_db/ProductController.php?action=fetchone&id=${searchParams.get(
          "id"
        )}`
      );
      const current = await response.json();
      setbrandItem(current);

      let recent = JSON.parse(localStorage.getItem("recentlyview")) ?? [];
      const check = recent.some((innerArray) =>
        innerArray.some((item) => item.id === current[0].id)
      );
      if (check == false) {
        recent.unshift(current);
        localStorage.setItem(
          "recentlyview",
          JSON.stringify(recent.slice(0, 4))
        );
      }
    };
    brandFetch();
  }, [id]);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="detailpg-main">
          <div className="detailpg-left">
            {brandItem?.map((itm) => (
              <img
                src={`/images/${itm.image}`}
                alt="loading"
                className="main-img"
              />
            ))}
            <div className="map-img">
              {DETA.map((item) => (
                <img src={item.image} alt="loading" />
              ))}
            </div>
            <h4>Product Ratings & Reviews</h4>
            <div className="star-box">
              <div>
                {" "}
                <h2> 3.9 </h2>
              </div>
              <div>
                <img src="/images/detailitems/Star 2.png" alt="loading" />
              </div>
              <div class="bar-text">
                <p>Excellent </p>
                <p>Very Good</p>
                <p>Average</p>
                <p>Poor</p>
              </div>
              <div class="bar">
                <div class="bar-stick-1"></div>
                <div class="bar-stick-2"></div>
                <div class="bar-stick-3"></div>
                <div class="bar-stick-4"></div>
                <div class="bar-stick-5"></div>
              </div>
            </div>
          </div>

          <div className="detailpg-rig">
            {brandItem?.map((itm) => (
              <>
                <p>
                  {itm?.text}
                  {itm?.description}
                  {itm?.offer}
                </p>
                <div className="detail-am">
                  <h3>
                    {itm?.currency}
                    {itm?.price}
                  </h3>{" "}
                  <div className="amt"> ₹23,99.00 </div>
                  <span>40% off</span>
                </div>
                <b> color</b>
              </>
            ))}
            <div className="colors">
              {COLOR.map((item) => (
                <img src={item.image} alt="loading" />
              ))}
            </div>
            <h4>Brand Fossil</h4>
            <p>
              Model Number FTW4068 Special Feature GPS, Heart Rate Monitor Water
              Resistance Level Water Resistant Band Colour Multicolor
            </p>
            <h4>Product Details</h4>
            <ul>
              <li>Model Number FTW4068</li>
              <li>
                Smartwatches powered with Wear OS by Google work with iPhone and
                Android Phones
              </li>
              <li>
                {" "}
                Extend your battery life for multiple days with new, smart
                battery modes
              </li>
              <li>
                Case size: 44mm; Band size: 22mm; interchangeable with Fossil
                22mm bands; Screen Size: 1.28" Color AMOLED / 416 x 416 / 326ppi
              </li>
              <li>
                {" "}
                resolution; touchscreen functionality; Warranty
                type:Manufacturer; 1 Year International Warranty{" "}
              </li>
            </ul>
            <p>
              {" "}
              Usually delivered in 7 days? Enter pincode for exact delivery
              dates/charges View Details
            </p>

            <button className="btn" onClick={addCart}>
              Add to Cart
            </button>
            <a href="/add">
              <button className="btn2">Buy Now</button>
            </a>
          </div>
        </div>
      </div>
      {brandItem?.map((itm) => (
        <Similar cat={itm.category} />
      ))}

      <Footer />
    </div>
  );
}

export default Index;
