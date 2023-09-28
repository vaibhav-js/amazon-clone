import React from 'react'
import '../styles/Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getCartTotalAmount, getCartTotalItems } from '../reducer'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Subtotal() {
    const [{ cart }] = useStateValue();
    const [disabled, setDisabled] = useState(false)
    const navigate = useNavigate();


    const navigateToPayment = () => {
        if (cart?.length) {
            setDisabled(true);
            navigate('/payment')
        }
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
        <button onClick={navigateToPayment} disabled={disabled}>Proceed to Buy</button>
    </div>
  )
}

export default Subtotal