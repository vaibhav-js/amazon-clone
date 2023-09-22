import React from 'react'
import '../styles/Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getCartTotal } from '../reducer'

function Subtotal() {
    const [{ cart }] = useStateValue();

  return (
    <div className='subtotal'>
        <CurrencyFormat
            renderText={(value) => (
                <>
                    <p>
                        Subtotal ({cart?.length} {cart?.length === 1 ? 'item': 'items'}): <strong>{value}</strong>
                    </p>
                    <small className='subtotal__gift'>
                        <input type='checkbox' />
                        This order contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={getCartTotal(cart)}
            displayType='text'
            thousandSeparator={true}
            prefix='₹'
        />
        <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal