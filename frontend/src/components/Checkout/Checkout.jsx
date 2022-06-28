import { useDispatch, useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { Button, Spinner } from 'react-bootstrap';

import { placeOrder } from '../../actions/OrderActions';

import { Error } from '../Error/Error';
import { Success } from '../Success/Success';

export const Checkout = ({ subtotal }) => {
  const dispatch = useDispatch();

  const orderstate = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderstate;

  const tokenHander = (token) => {
    dispatch(placeOrder(token, subtotal));
  };

  return (
    <>
      {loading && <Spinner animation="border" />}
      {error && <Error error="Something went wrong" />}
      {success && <Success success="Your order placed successfully" />}

      <StripeCheckout
        amount={subtotal * 100}
        shippingAddress
        token={tokenHander}
        stripeKey="pk_test_51KrpVcAX5QBpMPrInrMi9FzMwwnsIhYUkAkHypk6iSiAZPdOtAHNK8R4Lq1tIeLTh4V0m4qbN2p7MHHHO368yDzK00z2yWW4iB"
        currency="INR">
        <Button style={{ marginLeft: '40px' }} variant="danger">
          Pay now
        </Button>
      </StripeCheckout>
    </>
  );
};
