import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Similar(props) {
  const [similar, setSimilar] = useState();
  const navigate = useNavigate();
  const category = props.cat;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost/ecommerce_db/ProductController.php?action=fetchcategory&category=${category}`
      );
      const data = await response.json();
      setSimilar(data);
    };
    fetchData();
  }, [category]);
  return (
    <div className="brand">
      <div className="container">
        <div className="recently-view">
          <h3>SIMILAR PRODUCTS</h3>
          <hr className="deal-line" />
          <div className="deal-row">
            {similar &&
              similar.length != 0 &&
              similar?.map((itm) => (
                <div
                  className="deal-item"
                  onClick={() => {
                    navigate(`/detailpg/${itm?.slug}?id=${itm?.id}`);
                  }}
                >
                  <img src={`/images/${itm.image}`} alt="loading" />
                  <div className="deal-item-content">
                    <div>{itm.text}</div>
                    <h4>{itm.offer}</h4>
                    <div>{itm.description}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
