import React from 'react';
import "../styles/Checkout.css"

function Checkout() {
  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img
                className='checkout__ad'
                src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_DarkBackground_2_NotApproved._TTW_.jpg"
                alt=""
            />

            <div className='checkout__title'>
                <h1>Your shopping cart</h1>
            </div>
        </div>

        <div className='checkout__right'>
            <h2>You cart value is</h2>
        </div>
    </div>
  )
}

export default Checkout