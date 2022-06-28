import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getUserOrders } from '../../actions/OrderActions';

import { Error } from '../../components/Error/Error';
import { Loading } from '../../components/Loading/Loading';

import './Order.css';

export const Order = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const orderstate = useSelector((state) => state.getUserOrdersReducer);
  const { orders, error, loading } = orderstate;

  useEffect(() => {
    dispatch(getUserOrders());
  }, []);

  return (
    <>
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
      {orders && !loading && !error && (
        <div className="containerTable">
          <i
            className="fa fa-times"
            style={{ padding: '20px 0 0 760px' }}
            onClick={() => navigate('/')}
          />
          <h2 className="title">My Orders</h2>
          {orders &&
            orders.map((order, i) => (
              <div key={i} data-aos="fade-down" className="order">
                <div className="flex-container" style={{ display: 'flex' }}>
                  <div className="text-left m-2">
                    <h2 style={{ fontSize: '25px' }}>Items</h2>
                    <hr />
                    {order.orderItems.map((item, i) => (
                      <div key={i} style={{ display: 'flex' }}>
                        <img className="photoOrder" src={item.image} alt="dont img" />
                        <p>
                          <p>
                            {item.gender} {item.category}
                          </p>
                          <p>
                            {item.prices} * {item.quantity} = {item.price} Тг
                          </p>
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="text-left m-2">
                    <h2 style={{ fontSize: '25px' }}>Address</h2>
                    <hr />
                    <p>Street: {order.shippingAddress.street}</p>
                    <p>City: {order.shippingAddress.city}</p>
                    <p>Country: {order.shippingAddress.country}</p>
                  </div>
                  <div className="text-left m-2">
                    <h2 style={{ fontSize: '25px' }}>Order Info</h2>
                    <hr />
                    <p>Order Amount: {order.orderAmount} Тг</p>
                    <p>Date: {order.createdAt.substring(0, 10)}</p>
                    <p>Order Id: {order._id}</p>
                    <p>is Delivered: {order.isDelivered ? 'Delivered' : 'Deliver'}</p>
                    <p>
                      Arrival date:{' '}
                      {order.isDelivered ? order.updatedAt.substring(0, 10) : 'not delivered yet'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
};
