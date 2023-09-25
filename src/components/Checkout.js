import React from 'react';
import "../styles/Checkout.css"
import Subtotal from './Subtotal';
import CartItemCheckout from './CartItemCheckout';
import { useStateValue } from './StateProvider';

function Checkout() {
    const [{cart}] = useStateValue();

  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img
                className='checkout__ad'
                src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_DarkBackground_2_NotApproved._TTW_.jpg"
                alt=""
            />

            <div className='checkout__title'>
                <h1>Shopping Cart</h1>

                {cart.map(item => (
                    <CartItemCheckout
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                        quantity={item.quantity}
                    />
                ))}
            </div>
        </div>

        <div className='checkout__right'>
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout