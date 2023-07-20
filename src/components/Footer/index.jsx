import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { FOOTER } from "../../utils/foot-list";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const [footItem1, setfootItem1] = useState();
  const [footItem2, setfootItem2] = useState();
  const [footItem3, setfootItem3] = useState();

  useEffect(() => {
    fetchData1();
    fetchData2();
    fetchData3();
  }, []);

  const fetchData1 = async () => {
    try {
      const response = await axios.get(
        "http://localhost/ecommerce_db/aboutController.php?action=fetch"
      );
      setfootItem1(response.data);
    } catch (error) {
      console.error("Error fetching data from API :", error);
    }
  };

  const fetchData2 = async () => {
    try {
      const response = await axios.get(
        "http://localhost/ecommerce_db/helpController.php?action=fetch"
      );
      setfootItem2(response.data);
    } catch (error) {
      console.error("Error fetching data from API :", error);
    }
  };

  const fetchData3 = async () => {
    try {
      const response = await axios.get(
        "http://localhost/ecommerce_db/socialController.php?action=fetch"
      );
      setfootItem3(response.data);
    } catch (error) {
      console.error("Error fetching data from API :", error);
    }
  };

  console.log({ footItem1 });

  const handleSocialClick = (slug) => {
    let url;
    switch (slug) {
      case "twitter":
        url = `https://twitter.com`; 
        break;
      case "youtube":
        url = `https://www.youtube.com/`; 
        break;
      case "facebook":
        url = `https://www.facebook.com/`; 
        break;
      default:
        return;
    }
    window.open(url, "_self");
  };
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="foot-content">
            <div className="foot-content-part">
              <h4>ABOUT</h4>
              {FOOTER.map((item) => (
                <ul>
                  <li>
                    <a
                      onClick={() => {
                        navigate(`/about/${item.slug}?id=${item.id}`);
                      }}
                    >
                      {item.pg}
                    </a>
                  </li>
                </ul>
              ))}
            </div>
            <div className="foot-content-part">
              <h4>HELP</h4>

              {footItem2 && footItem2.length > 0 &&
              footItem2?.map((item) => (
                <ul>
                  <li>
                    <a onClick={() => {
                        navigate(`/help/${item.slug}?id=${item.id}`);
                      }}>{item.name}</a>
                  </li>
                </ul>
              ))}
            </div>
            <div className="foot-content-part">
              <h4>SOCIAL</h4>

              {footItem3 && footItem3.length > 0 &&
              footItem3?.map((item) => (
                <ul>
                  <li>
                    <a onClick={()=> handleSocialClick(item.slug)
                      }>{item.name}</a>
                  </li>
                </ul>
              ))}
            </div>
            <div className="foot-content-part">
              <h4>Mail Us :</h4>
              <p>
                Shopindeed Internet Private Limited, Buildings Alyssa, Begonia &
                Clove Bathery Village, Outer Ring Road Village, Kochy, 560103,
                Banglure, India
              </p>
            </div>
          </div>
          <hr />
          <div style={{ textAlign: "center", color: "white" }}>
            © 2007-2022 shopindeed.com{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
