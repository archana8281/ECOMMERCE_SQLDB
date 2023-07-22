import React from 'react'
import { STATUS } from '../../utils/offer';
function Statusbar
(props) {
  const step  = props.step;

  return (
    <div className="sbar">
        <div className="container3">
            {
                STATUS.map((item, Index) =>(
                <div className="sbar-pay">
                 <div className='pay-btn'>{item.title} </div>
                 <div className='bar-icon'><img src={step <= Index? "/images/icons/circle.png":"/images/icons/tik.png"}/></div>
                 {}
                 </div>
                ))
            }
        </div>

    </div>
  )
}

export default Statusbar
