import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Form, Button } from 'react-bootstrap';

import { editDevice, getDeviceById } from '../../../actions/DeviceActions';

import { Error } from '../../../components/Error/Error';
import { Loading } from '../../../components/Loading/Loading';
import { Success } from '../../../components/Success/Success';

export const EditDevice = () => {
  const [data, setData] = useState({
    category: '',
    prices: 0,
    gender: '',
    description: '',
    image: ''
  });

  const getDeviceByIdState = useSelector((state) => state.getDeviceByIdReducer);
  const { device, error, loading } = getDeviceByIdState;

  const editdevicestate = useSelector((state) => state.editDeviceReducer);
  const { editloading, editerror, editsuccess } = editdevicestate;

  const history = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (device) {
      if (device._id === history.deviceid) {
        setData({ ...device });
      } else {
        dispatch(getDeviceById(history.deviceid));
      }
    } else {
      dispatch(getDeviceById(history.deviceid));
    }
  }, [device, history.deviceid]);

  const formHandler = (event) => {
    event.preventDefault();
    dispatch(editDevice(data));
  };

  return (
    <>
      {loading && <Loading />}
      {error && editerror && <Error error="Something went wrong" />}
      {editloading && <Loading />}
      {device && (
        <div className="containerTable">
          <i
            className="fa fa-times"
            style={{ padding: '20px 0 0 180px' }}
            onClick={() => navigate('/admin/deviceslist')}
          />
          <div className="title">Edit Device</div>
          {editsuccess && <Success success="Device details edited successfully" />}
          <Form className="d-flex flex-column" onSubmit={formHandler}>
            <Form.Control
              type="text"
              className="mt-3"
              value={data.category}
              onChange={(event) => {
                setData((prevState) => ({
                  ...prevState,
                  category: event.target.value
                }));
              }}
            />
            <Form.Control
              type="number"
              className="mt-3"
              placeholder="prices"
              value={data.prices}
              onChange={(event) => {
                setData((prevState) => ({
                  ...prevState,
                  prices: event.target.value
                }));
              }}
            />
            <Form.Control
              type="text"
              className="mt-3"
              placeholder="gender"
              value={data.gender}
              onChange={(event) => {
                setData((prevState) => ({
                  ...prevState,
                  gender: event.target.value
                }));
              }}
            />
            <Form.Control
              type="text"
              className="mt-3"
              placeholder="image"
              value={data.image}
              onChange={(event) => {
                setData((prevState) => ({
                  ...prevState,
                  image: event.target.value
                }));
              }}
            />
            <Form.Control
              type="text"
              className="mt-3"
              placeholder="description"
              value={data.description}
              onChange={(event) => {
                setData((prevState) => ({
                  ...prevState,
                  description: event.target.value
                }));
              }}
            />
            <div>
              <Button type="submit" className="align-self-end mt-3" variant="outline-success">
                Edit Device
              </Button>
            </div>
          </Form>
        </div>
      )}
    </>
  );
};
