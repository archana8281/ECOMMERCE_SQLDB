import React from 'react'

function UPI() {
  return (
    
      <div className="upay-list"><div>
      <input type="radio" name="visa" id=""  />
      <label htmlFor="p" className='upay'>Phonepay</label>
      <input type="radio" name="visa" id="" />
      <label htmlFor="p"className='upay'>Paytm</label>
      <input type="radio" name="visa" id="" />
      <label htmlFor="p" className='upay'>Google Pay</label>
      </div>
      <div className='pay-img'>
      <img src="/images/pay/visa.png" alt="loading" />
      <img src="/images/pay/rupy.png" alt="loading" />  
      <img src="/images/pay/raz.png" alt="loading" />
</div>
    </div>
  )
}

export default UPI