import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllDevices } from '../../actions/DeviceActions';

import { Error } from '../../components/Error/Error';
import { Filter } from '../../components/Filter/Filter';
import { Loading } from '../../components/Loading/Loading';
import { Devices } from '../../components/Devices/Devices';
import { Slider } from '../../components/Slider/Slider';

import './Shop.css';

export const Shop = () => {
  const dispatch = useDispatch();

  const devicesstate = useSelector((state) => state.getAllDevicesReducer);
  const { devices, error, loading } = devicesstate;

  useEffect(() => {
    dispatch(getAllDevices());
  }, []);

  return (
    <>
      <Slider />
      <Filter />
      <div className="row">
        {loading && <Loading />}
        {error && <Error error="Oops error" />}
        {devices && !loading && !error && (
          <div className="containers">
            <div className="cards" style={{ marginLeft: '20px' }}>
              {devices.map((device) => (
                <div key={device._id} className="col-md-3">
                  <Devices device={device} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
