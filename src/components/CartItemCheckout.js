import React from 'react'
import '../styles/cartItemCheckout.css'
import { useStateValue } from './StateProvider'


function CartItemCheckout({ id, image, title, price, rating, quantity}) {
    // eslint-disable-next-line
    const [{}, dispatch] = useStateValue();

    const removeFromCart = () => {

        dispatch({
            type: "REMOVE_FROM_CART",
            item: {
                id,
                image,
                title,
                price,
                rating,
                quantity
            }
        })
    }

  return (
    <div className='cartItemCheckout'>
        <img
            src={image}
            alt='product'
        />

        <div className='cartItemCheckout__info' key={id}>
            <p className='cartItemCheckout__title'>{title}</p>
            <p className='cartItemCheckout__price'>
                <small><sup>₹</sup></small>
                <strong>{price}</strong>
            </p>

            <div className='cartItemCheckout__rating'>
                {Array(rating).fill().map((_, i) => (
                    <p key={i}>⭐</p>
                ))}
            </div>
            <div>
                <p><strong>Quantity: {quantity}</strong></p>
            </div>
            <button onClick={removeFromCart}>Remove from Cart</button>
        </div>
    </div>
  )
}

export default CartItemCheckout