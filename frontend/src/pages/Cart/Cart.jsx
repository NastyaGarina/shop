import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { addToCart, deleteFromCart } from '../../actions/CartActions';

import { Checkout } from '../../components/Checkout/Checkout';

import './Cart.css';

export const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;

  let subtotal = cartItems.reduce((x, item) => x + item.price, 0);

  return (
    <div className="containerTable">
      <i
        className="fa fa-times"
        style={{ padding: '20px 0 0 660px' }}
        onClick={() => navigate('/')}
      />
      <h2 className="title">My cart</h2>
      <div className="infoCart">
        {cartItems.length ? (
          <div className="containerCart">
            {cartItems.map((item, i) => (
              <div key={i}>
                <div className="m-2 p-1 contentCart">
                  <div>
                    <img src={item.image} className="photoCart" alt="dont img" />
                  </div>
                  <div style={{ margin: '15px 0' }}>
                    <h1>
                      {item.category} {item.gender}
                    </h1>
                    <h1>
                      Price: {item.quantity} * {item.prices} = {item.price} Тг
                    </h1>
                    <h1>
                      Quantity:
                      <i
                        className="fa fa-plus"
                        aria-hidden="true"
                        onClick={() => {
                          dispatch(addToCart(item, +item.quantity + 1));
                        }}
                      />
                      <b>{item.quantity}</b>
                      <i
                        className="fa fa-minus"
                        aria-hidden="true"
                        onClick={() => {
                          dispatch(addToCart(item, item.quantity - 1));
                        }}
                      />
                    </h1>
                  </div>
                  <div>
                    <i
                      className="fa fa-times"
                      aria-hidden="true"
                      onClick={() => {
                        dispatch(deleteFromCart(item));
                      }}
                    />
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
        <div className="col-md-4" style={{ margin: '0 0 0 20px' }}>
          <h2>SubTotal: {subtotal}</h2>
          <Checkout subtotal={subtotal} cartItems2={cartItems} />
        </div>
      </div>
    </div>
  );
};
