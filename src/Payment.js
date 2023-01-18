import React from 'react'
import CheckoutProduct from './CheckoutProduct'
import './Payment.css'
import { useStateValue } from './Stateprovider'
import { Link } from "react-router-dom";
import {CardElement, useElements, useStripe } from '@stripe/react-stripe-js';


function Payment() {
    const [{basket, user}, dispatch] = useStateValue();


  return (
    <div className='payment'>
        <div className='payment__container'>
            <h1>
                Checkout(
                    <Link to={"/Checkout"}>{basket.length} items</Link>
                )
            </h1>
            {/*payment section - delivery address*/}
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>delivery address</h3>
                </div>
                <div className='payment__address'>
                    <p>{user?.email}</p>
                    <p>123 React Lane</p>
                    <p>Los Angeles California</p>
                </div>
            </div>
            {/*payment section - review items */}
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>review items and Delivery</h3>
                </div>
                <div className='payment__item'>
                    {basket.map(item =>(
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            {/*payment section - payment method */}
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>payment method</h3>
                </div>
                <div className='payment__details'>
                    {/*stripe*/}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment