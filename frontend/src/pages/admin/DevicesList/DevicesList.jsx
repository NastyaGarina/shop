import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { getAllDevices, deleteDevice } from '../../../actions/DeviceActions';

import { Error } from '../../../components/Error/Error';
import { Loading } from '../../../components/Loading/Loading';
import { AddDevice } from '../../../components/AddDevice/AddDevice';

import './DevicesList.css';

export const DevicesList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const devicesstate = useSelector((state) => state.getAllDevicesReducer);
  const { devices, error, loading } = devicesstate;

  useEffect(() => {
    dispatch(getAllDevices());
  }, []);

  const [addShow, setAddShow] = useState(false);

  const handleAddClose = () => setAddShow(false);
  const handleAddModal = () => setAddShow(true);

  return (
    <>
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
      {devices && !loading && !error && (
        <div className="containerTable">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ padding: '0 0 0 200px' }} className="title">
              Devices List
            </div>
            <div style={{ padding: '0 0 0 200px' }}>
              <Button variant="success" onClick={handleAddModal}>
                add
              </Button>
              <AddDevice show={addShow} handleClose={handleAddClose} />
            </div>
          </div>
          <table>
            <thead className="thead-dark">
              <tr>
                <th>Photo</th>
                <th>Category</th>
                <th>Prices</th>
                <th>Gender</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {devices &&
                devices.map((device, i) => (
                  <tr key={i}>
                    <td>
                      <img className="tablePhoto" src={device.image} alt="dont img" />
                    </td>
                    <td>{device.category}</td>
                    <td>{device.prices}</td>
                    <td>{device.gender}</td>
                    <td>
                      <div className="content">
                        <div
                          className="icon icon-fill"
                          onClick={() => {
                            dispatch(deleteDevice(device._id));
                          }}>
                          <i className="fa fa-times" />
                        </div>
                        <div
                          className="icon icon-expand"
                          onClick={() => navigate(`/admin/editdevice/${device._id}`)}>
                          <i className="fa fa-pen" />
                        </div>
                      </div>
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
