import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';

import { deliverOrder, getAllOrders } from '../../../actions/OrderActions';

import { Error } from '../../../components/Error/Error';
import { Loading } from '../../../components/Loading/Loading';

export const OrderList = () => {
  const dispatch = useDispatch();
  const getordersstate = useSelector((state) => state.getAllOrdersReducer);
  const { orders, loading, error } = getordersstate;

  useEffect(() => {
    dispatch(getAllOrders());
  }, []);

  return (
    <>
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
      {orders && !loading && !error && (
        <div className="containerTable">
          <div className="title">Order List</div>
          <table>
            <thead>
              <tr>
                <th>Order Id</th>
                <th>Email</th>
                <th>User Id</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders &&
                orders.map((order) => (
                  <tr key={order._id}>
                    <td>{order._id}</td>
                    <td>{order.email}</td>
                    <td>{order.userid}</td>
                    <td>{order.orderAmount}</td>
                    <td>{order.createdAt.substring(0, 10)}</td>
                    <td>
                      {order.isDelivered ? (
                        <h1>Delivered</h1>
                      ) : (
                        <Button
                          variant="danger"
                          onClick={() => {
                            dispatch(deliverOrder(order._id));
                          }}>
                          Deliver
                        </Button>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
