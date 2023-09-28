import React, { useState, useEffect } from 'react'
import "../styles/Orders.css"
import { db } from '../config/firebase'
import { useStateValue } from './StateProvider'
import Order from './Order'
import { collection, query, orderBy, getDocs, doc } from "firebase/firestore";

function Orders() {
    const [orders, setOrders] = useState([])
    const [{ user, cart }, dispatch] = useStateValue()

    useEffect(() => {
        if (user) {
            const getOrdersForUser = async () => {
                const userRef = doc(db, 'users', user?.uid)
                const orderRef = collection(userRef, 'orders')
                const q = query(orderRef, orderBy('created', 'desc'))
                const snapshot = await getDocs(q);

                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })));
                
            }
            getOrdersForUser();
        } else {
            setOrders([])
        }
    }, [user])

  return (
    <div className='orders'>
        <h3>Your Orders</h3>

        <div className='orders__order'>
            {
                orders.map(order => (
                    <Order order={order} />
                ))
            }
        </div>
    </div>
  )
}

export default Orders