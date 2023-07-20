import React from 'react'

function Price() {
  return (
    <div>
        <table  className="price-items">
            <tr>
                <td>Price (2 item)</td>
                <td>₹1,499</td>
            </tr>
            <tr>
                <td>Discount</td>
                <td>− ₹1,200</td>
            </tr>
            <tr>
                <td>Delivery Charges</td>
                <td>FREE</td>
            </tr>
            <tr>
                <td>Total Amount</td>
                <td>₹299</td>
            </tr>
        </table>
    </div>
  )
}

export default Price