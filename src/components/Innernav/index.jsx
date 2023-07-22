import React from "react";
import { useNavigate } from "react-router-dom";


function TopDeals(props) {
    const Data = props.data;
    const navigate = useNavigate();
    
  return (
    <div className="inav">
      <div className="container">
        <div className="deal-row">
            {Data?.map((item1)=>(
               <div
               className="deal-item"
                 onClick={()=>{
                   navigate(
                     `/detailpg/${item1?.slug}?id=${item1?.id}`
                   );
                 }}
             >
            <img
                      src={`/images/${item1.image}`}
                      alt="loading"
                    />
                    <div className="deal-item-content">
                      <div>{item1?.text}</div>
                      <h4>{item1?.offer}</h4>
                      <div>{item1?.description}</div>
                    </div>
            </div>
           ))} 
          
        </div>
      </div>
    </div>
  );
}

export default TopDeals;
