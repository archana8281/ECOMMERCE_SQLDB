import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [nav, setNav] = useState();
  useEffect(()=>{
    const navbarFetch = async () => {
      const response = await fetch(
        `http://localhost/ecommerce_db/CategoryController.php?action=fetch`
      );
      const data = await response.json();
      setNav(data);
    };
    navbarFetch();
  }, []);
  // console.log({ nav });
  return (
    <div className="nav">
      <div className="container">
        <ul className="ul-itm">
          {nav?.map((item)=>(
            <li
              className="itm"
              onClick={()=>{
              navigate(`/collection/${item?.slug}?id=${item?.id}`)
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
