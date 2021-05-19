import React from 'react';
import {useDispatch} from 'react-redux'
import StripeCheckout from 'react-stripe-checkout';
import {placeOrder} from '../actions/orderActions'

export default function Checkout({subtotal}) {

    const dispatch = useDispatch()
    function tokenHandle(token)
    {
        console.log(token);
        dispatch(placeOrder(token, subtotal))
    }

    return (
        <div>
            <StripeCheckout
            amount= {subtotal * 100} 
            shippingAddress
            token={tokenHandle}
            currency='USD'
            stripeKey='pk_test_51IqGm9AXd0u1sBhlaBHTJ9OmTNI6YRkV976ZQ8hgpTPgFfAXiW30yv9FOHcdTx9Jf57GFif6nlr9JI9cp0EPx9UC00MMArBIFi'
            >
                <button className='btn'>Pay Now</button>

            </StripeCheckout>
        </div>
    )
}
