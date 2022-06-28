import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Modal, Form } from 'react-bootstrap';

import { addDevice } from '../../actions/DeviceActions';

export const AddDevice = ({ show, handleClose }) => {
  const [newDevice, setNewDevice] = useState({
    category: '',
    prices: 0,
    gender: '',
    description: ''
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formHandler = (event) => {
    event.preventDefault();
    dispatch(addDevice(newDevice));
    navigate('/admin/deviceslist');
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertToBase64(file);
    setNewDevice({ ...newDevice, image: base64 });
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Device</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="d-flex flex-column" onSubmit={formHandler}>
            <Form.Control
              type="text"
              className="mt-3"
              placeholder="category"
              value={newDevice.category}
              onChange={(event) => {
                setNewDevice((prevState) => ({
                  ...prevState,
                  category: event.target.value
                }));
              }}
            />
            <Form.Control
              type="number"
              className="mt-3"
              placeholder="prices"
              value={newDevice.prices}
              onChange={(event) => {
                setNewDevice((prevState) => ({
                  ...prevState,
                  prices: event.target.value
                }));
              }}
            />
            <Form.Control
              type="text"
              className="mt-3"
              placeholder="gender"
              value={newDevice.gender}
              onChange={(event) => {
                setNewDevice((prevState) => ({
                  ...prevState,
                  gender: event.target.value
                }));
              }}
            />
            <Form.Control
              type="file"
              className="mt-3"
              name="image"
              accept=".jpeg, .png, .jpg"
              onChange={(event) => {
                handleFileUpload(event);
              }}
            />
            <Form.Control
              type="text"
              className="mt-3"
              placeholder="description"
              value={newDevice.description}
              onChange={(event) => {
                setNewDevice((prevState) => ({
                  ...prevState,
                  description: event.target.value
                }));
              }}
            />
            <div>
              <Button type="submit" className="align-self-end mt-3" variant={'outline-success'}>
                Add Device
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
