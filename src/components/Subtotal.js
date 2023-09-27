import React from 'react'
import '../styles/Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getCartTotalAmount, getCartTotalItems } from '../reducer'
import { useNavigate } from 'react-router-dom'

function Subtotal() {
    const [{ cart }] = useStateValue();
    const navigate = useNavigate();

    const navigateToPayment = () => {
        navigate('/payment')
    }

  return (
    <div className='subtotal'>
        <CurrencyFormat
            renderText={(value) => (
                <>
                    <p>
                        Subtotal ({getCartTotalItems(cart)} {getCartTotalItems(cart) === 1 ? 'item': 'items'}): <strong>{value}</strong>
                    </p>
                    <small className='subtotal__gift'>
                        <input type='checkbox' />
                        This order contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={getCartTotalAmount(cart)}
            displayType='text'
            thousandSeparator={true}
            prefix='₹'
        />
        <button onClick={navigateToPayment}>Proceed to Buy</button>
    </div>
  )
}

export default Subtotal