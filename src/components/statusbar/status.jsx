import React from 'react'
import { STATUS } from '../../utils/offer';
function Statusbar
({step}) {
  return (
    <div className="sbar">
        <div className="container3">
            {
                STATUS.map((item, inde) =>(
                <div className="sbar-pay">
                 <div className='pay-btn'>{item.title} {step}</div>
                 <div className='bar-icon'> </div>
                 {}
                 </div>
                ))
            }
        </div>

    </div>
  )
}

export default Statusbar
