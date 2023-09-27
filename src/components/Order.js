import React from 'react'
import "../styles/Order.css"
import moment from 'moment/moment'
import CartItemCheckout from './CartItemCheckout'
import CurrencyFormat from 'react-currency-format'

function Order({ order }) {
  return (
    <div className='order' key={order.id}>
        <h2>Order</h2>
        <p>{moment.unix(order.data.created).format("MMMM DD YYYY, h:mma")}</p>
        <p className='order__id'>
            <small>{order.id}</small>
        </p>
        {
            order.data.cart?.map(item => (
                <CartItemCheckout
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    quantity={item.quantity}
                    hideButton
                />
            ))
        }
        <CurrencyFormat
            renderText={(value) => (
                <>
                    <h4 className='order__total'>Order Total: <strong>{value}</strong></h4>
                </>
            )}
            decimalScale={2}
            value={order.data.amount / 100}
            displayType='text'
            thousandSeparator={true}
            prefix='₹'
        />                        
    </div>
  )
}

export default Order