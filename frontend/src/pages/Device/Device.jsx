import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { getDeviceById } from '../../actions/DeviceActions';
import { addToCart } from '../../actions/CartActions';

import { Error } from '../../components/Error/Error';
import { Loading } from '../../components/Loading/Loading';

import './Device.css';

export const Device = () => {
  const [quantity, setQuantite] = useState(1);

  const dispatch = useDispatch();
  const history = useParams();
  const navigate = useNavigate();

  const getDeviceByIdState = useSelector((state) => state.getDeviceByIdReducer);
  const { device, error, loading } = getDeviceByIdState;

  useEffect(() => {
    dispatch(getDeviceById(history.deviceid));
  }, [history.deviceid]);

  let addtocart = () => {
    dispatch(addToCart(device, quantity));
  };

  return (
    <>
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
      {device && !loading && !error && (
        <>
          <div className="containerTable" style={{ position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <i
                className="fa fa-arrow-left-long"
                style={{ padding: '0 200px 0 0' }}
                onClick={() => navigate('/')}
              />
              <h2 className="title" style={{ padding: '0 180px 0 0' }}>
                Device
              </h2>
            </div>
            <div style={{ display: 'flex' }}>
              <div style={{ marginRight: '50px' }}>
                <img className="photo" src={device.image} alt="dont img" />
              </div>
              <div className="info">
                <div style={{ fontSize: '30px' }}>
                  {device.category[0].toUpperCase() + device.category.slice(1)} {device.gender}
                </div>
                <div style={{ margin: '10px 0 4px 0' }}>Quantite</div>
                <select
                  className="form-control"
                  value={quantity}
                  onChange={(event) => {
                    setQuantite(event.target.value);
                  }}>
                  {[...Array(10).keys()].map((i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
                <div style={{ margin: '10px 0' }}>Price: {device.prices * quantity} Тг</div>
                <Button style={{ margin: '20px 60px' }} variant="primary" onClick={addtocart}>
                  ADD TO CARD
                </Button>

                <div style={{ padding: '0 10px 0 0', position: 'absolute' }}>
                  {device.description}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
