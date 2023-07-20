import React from "react";
import { useNavigate } from "react-router-dom";


function TopDeals(props) {
    const Data = props.data;
    const navigate = useNavigate();
    console.log({Data});
  return (
    <div className="inav">
      <div className="container">
        <div className="deal-row">
            {Data.map((item1)=>(
               <div
               className="deal-item"
                 onClick={()=>{
                   navigate(
                     `/detailpg/${item1?.text?.stringValue}?id=${item1?.id?.integerValue}`
                   );
                 }}
             >
            <img
                      src={item1?.image?.arrayValue?.values[0]?.stringValue}
                      alt="loading"
                    />
                    <div className="deal-item-content">
                      <div>{item1?.text?.stringValue}</div>
                      <h4>{item1?.offer?.stringValue}</h4>
                      <div>{item1?.description?.stringValue}</div>
                    </div>
            </div>
           ))} 
          
        </div>
      </div>
    </div>
  );
}

export default TopDeals;
