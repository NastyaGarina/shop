import axios from 'axios';

export const getAllDevices = () => async (dispatch) => {
  dispatch({ type: 'GET_DEVICES_REQUEST' });

  try {
    const response = await axios.get('/api/devices/getalldevices');
    dispatch({ type: 'GET_DEVICES_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'GET_DEVICES_FAILED', payload: error });
  }
};

export const getDeviceById = (deviceid) => async (dispatch) => {
  dispatch({ type: 'GET_DEVICEBYID_REQUEST' });

  try {
    const response = await axios.post('/api/devices/getdevicebyid', {
      deviceid
    });
    dispatch({ type: 'GET_DEVICEBYID_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'GET_DEVICEBYID_FAILED', payload: error });
  }
};

export const filterDevices = (category, gender) => async (dispatch) => {
  let filteredDevices;
  dispatch({ type: 'GET_DEVICES_REQUEST' });

  try {
    const response = await axios.get('/api/devices/getalldevices');

    if (gender !== 'all') {
      filteredDevices = response.data.filter((device) => device.gender.toLowerCase() === gender);
    }

    if (category !== 'all') {
      filteredDevices = response.data.filter(
        (device) => device.category.toLowerCase() === category
      );
    }

    dispatch({ type: 'GET_DEVICES_SUCCESS', payload: filteredDevices });
  } catch (error) {
    dispatch({ type: 'GET_DEVICES_FAILED', payload: error });
  }
};

export const addDevice = (device) => async (dispatch) => {
  dispatch({ type: 'ADD_DEVICE_REQUEST' });
  try {
    const response = await axios.post('/api/devices/adddevice', { device });
    console.log(response);
    dispatch({ type: 'ADD_DEVICE_SUCCESS' });
    window.location.href = '/admin/deviceslist';
  } catch (error) {
    dispatch({ type: 'ADD_DEVICE_FAILED', payload: error });
  }
};

export const editDevice = (editeddevice) => async (dispatch) => {
  dispatch({ type: 'EDIT_DEVICE_REQUEST' });
  try {
    const response = await axios.put('/api/devices/editdevice', {
      editeddevice
    });
    console.log(response);
    dispatch({ type: 'EDIT_DEVICE_SUCCESS' });
    window.location.href = '/admin/deviceslist';
  } catch (error) {
    dispatch({ type: 'EDIT_DEVICE_FAILED', payload: error });
  }
};

export const deleteDevice = (deviceid) => async () => {
  try {
    const response = await axios.post('/api/devices/deletedevice', {
      deviceid
    });
    alert('Device Deleted Successfully');
    console.log(response);
    window.location.reload();
  } catch (error) {
    alert('Something went wrong');
    console.log(error);
  }
};
