import React, { useEffect } from "react";
import "./App.css";
import Home from "./Home";
import Header from "./Header"
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Payment from "./Payment";
import Login from "./Login";
import {auth} from './firebase'
import { useStateValue } from "./Stateprovider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  'pk_test_51KwZ8uSIU5fIqwkGtz8rIrncpuJOzp3Ya3hpAVmgxTLPE44OehiSEayGcLYce7ILb4q6SrznQhHrst4VT1KXklXm0091YEsRwH'
);



function App() {
  const [{}, dispatch] = useStateValue();


  useEffect(() => {
    //will only run once when the app component loads
    auth.onAuthStateChanged(authUser =>{
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        //the user just loggedin/was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });
  }, [])

  return (
    // BEM
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={[<Login/>]}/>
          <Route path="/Checkout" element={[<Header/>, <Checkout />]}/>
          <Route path="/" element={[<Header/>, <Home />]}/>
          <Route path="/Payment"  element={[<Header/>, <Payment/>]}/> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;