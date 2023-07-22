import React from "react";
import { useEffect, useState } from "react";
import { Offer } from "../../utils/offer";
import { useNavigate } from "react-router-dom";

function Brand() {
  const path = `C:/xampp/htdocs/ecommerce_db/public/images/`;
  const navigate = useNavigate();
  const [brandItem, setbrandItem] = useState();
  const [view, setView] = useState(false);
  const show = brandItem?.slice(0, 8);
  const show1 = brandItem?.slice(8);
  const detailView = JSON.parse(localStorage.getItem("recentlyview"));
  useEffect(() => {
    const brandFetch = async () => {
      const response = await fetch(
        `http://localhost/ecommerce_db/ProductController.php?action=fetch`,
        {
          mode: "cors",
          method: "get",
          headers: { "content-Type": "application/json" },
        }
      );
      const data = await response.json();
      setbrandItem(data);
    };
    brandFetch();
  }, []);

  const toggleView = () => {
    setView(!view);
  };
  return (
    <>
      <div>
        <div className="container" id="topoffer_section">
          <h3>Top Offer</h3>
          <hr className="top-line" />
          <div className="top-list">
            {Offer.map((item) => (
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
      <div className="brand">
        <div className="container">
          <div className="recently-view">
            <h3>Recently Viewed Brand</h3>
            <hr className="deal-line" />
            <div className="deal-row">
              {detailView.map((innerArray, index) => (
                <div key={index}>
                  {innerArray.map((item) => (
                    <div
                      key={item.id}
                      className="deal-item"
                      onClick={() => {
                        navigate(`/detailpg/${item?.slug}?id=${item?.id}`);
                      }}
                    >
                      <img src={`/images/${item.image}`} alt="loading" />
                      <div className="deal-item-content">
                        <div>{item?.text}</div>
                        <h4>{item?.offer}</h4>
                        <div>{item?.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <h3>Deals on Top Brand</h3>
          <hr className="deal-line" />
          <div className="deal-row">
            {show &&
              show?.length !== 0 &&
              show.map((item) => (
                <div
                  className="deal-item"
                  onClick={() => {
                    navigate(`/detailpg/${item?.slug}?id=${item?.id}`);
                  }}
                >
                  <img src={`/images/${item.image}`} alt="loading" />
                  <div className="deal-item-content">
                    <div>{item?.text}</div>
                    <h4>{item?.offer}</h4>
                    <div>{item?.description}</div>
                  </div>
                </div>
              ))}

            {view &&
              show1.map((item) => (
                <div
                  className="deal-item"
                  onClick={() => {
                    navigate(`/detailpg/${item?.slug}?id=${item?.id}`);
                  }}
                >
                  <img src={`/images/${item.image}`} alt="loading" />
                  <div className="deal-item-content">
                    <div>{item?.text}</div>
                    <h4>{item?.offer}</h4>
                    <div>{item?.description}</div>
                  </div>
                </div>
              ))}
          </div>
          <a className="view" onClick={toggleView}>
            {view ? "Close" : "View All"}
          </a>
        </div>
      </div>
    </>
  );
}
export default Brand;
