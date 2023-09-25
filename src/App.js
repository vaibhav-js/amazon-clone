import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from './components/Login';
import { auth } from './config/firebase';
import { useStateValue } from './components/StateProvider';


function App() {
  // eslint-disable-next-line
  const [{}, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log('the user is', authUser)
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
