import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { placeOrder } from "../actions/orderActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";
export default function Checkout({ subtotal }) {
  const orderstate = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderstate;
  const dispatch = useDispatch();
  function tokenHandle(token) {
    console.log(token);
    dispatch(placeOrder(token, subtotal));
  }

  return (
    <div>
      {loading && <Loading />}
      {error && <Error error="System Failure" />}
      {success && <Success success="The order was succesfully purchashed" />}

      <StripeCheckout
        amount={subtotal * 100}
        shippingAddress
        token={tokenHandle}
        currency="USD"
        stripeKey="pk_test_51IqGm9AXd0u1sBhlaBHTJ9OmTNI6YRkV976ZQ8hgpTPgFfAXiW30yv9FOHcdTx9Jf57GFif6nlr9JI9cp0EPx9UC00MMArBIFi"
      >
        <button className="btn">Pay Now</button>
      </StripeCheckout>
    </div>
  );
}
