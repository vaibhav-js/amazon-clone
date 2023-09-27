import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from './components/Login';
import { auth } from './config/firebase';
import { useStateValue } from './components/StateProvider';
import Payment from './components/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './components/Orders';

const promise = loadStripe(
  'pk_test_51Nusm5SBkvkpHu6bLmyur3k5OspQ9GuNlIgenbD4BxbmmpUTlM4zpAQY0md3JRWo3DJKxj61EEgc8kyUwkACIk3q00belxmguC'
);


function App() {
  // eslint-disable-next-line
  const [{}, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        // the user is logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [dispatch]);

  // BEM
  return (
    <Router>
      <div className="app">

        <Routes>
          <Route
            path="/login"
            element={
            <>
              <Login />
            </>
            }
          >
          </Route>
          <Route
            path="/checkout"
            element={
            <>
              <Header />
              <Checkout />
            </>
            }
          >
          </Route>
          <Route
            path="/orders"
            element={
            <>
              <Orders />
            </>
            }
          >
          </Route>
          <Route
            path="/payment"
            element={
            <>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </>
            }
          >
          </Route>
          <Route
            exact path="*"
            element={
            <>
              <Header />
              <Home />
            </>
          }
          >
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
