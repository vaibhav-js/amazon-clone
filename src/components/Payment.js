import React, { useEffect, useState } from 'react'
import '../styles/Payment.css'
import { useStateValue } from './StateProvider'
import CartItemCheckout from './CartItemCheckout';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getCartTotalAmount } from '../reducer';
import axios from '../config/axios'
import { useNavigate } from 'react-router-dom';
import { db } from '../config/firebase';
import { doc, setDoc } from 'firebase/firestore';


function Payment() {
    const [{ user, cart }, dispatch] = useStateValue();
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setclientSecret] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        //generate the special stripe secret which allows us to charge a customer

        const getClientSecret = async () => {
            const cartTotalAmount = getCartTotalAmount(cart)
            if (cartTotalAmount) {
                const response = await axios({
                    method: 'post',
                    // Stripe expects the total in a currencies subunit
                    url: `/payments/create?total=${cartTotalAmount * 100}`
                })
                setclientSecret(response.data.clientSecret)
            }
        }
        
        getClientSecret();

    }, [cart])

    console.log('the secret is', clientSecret)


    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true)

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(async ({ paymentIntent }) => {
            console.log(paymentIntent)

            const data = {
                cart: cart,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            }

            const userDocRef = doc(db, 'users', user?.uid)
            const ordersDocRef = doc(userDocRef, 'orders', paymentIntent.id)

            setDoc(ordersDocRef, data);

            setSucceeded(true)
            setError(null)
            setProcessing(false)
            dispatch({
                type: "EMPTY_CART"
            })
            navigate('/orders', {replace: true})
        })  
    }
    const handleChange = (e) => {
        // Listen for changes in CardElement
        setDisabled(e.error)
        setError(e.error ? e.error.message : "")
    }

  return (
    <div className='payment'>
        <div className='payment__container'>
            <h1>Checkout</h1>
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment__address'>
                    <p>{user?.email}</p>
                    <p>Lucknow, UP</p>
                    <p>India</p>
                </div>
            </div>

            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Review items and delivery</h3>
                </div>
                <div className='payment__items'>
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

            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Payment method</h3>
                </div>
                <div className='payment__details'>
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>

                        <div className='payment__priceContainer'>
                            <CurrencyFormat
                                renderText={(value) => (
                                    <>
                                        <h3>Order Total: {value}</h3>
                                    </>
                                )}
                                decimalScale={2}
                                value={getCartTotalAmount(cart)}
                                displayType='text'
                                thousandSeparator={true}
                                prefix='₹'
                            />
                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </button>
                        </div>

                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment