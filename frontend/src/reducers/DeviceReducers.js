export const getAllDevicesReducer = (state = { devices: [] }, action) => {
  switch (action.type) {
    case 'GET_DEVICES_REQUEST':
      return {
        loading: true,
        ...state
      };
    case 'GET_DEVICES_SUCCESS':
      return {
        loading: false,
        devices: action.payload
      };
    case 'GET_DEVICES_FAILED':
      return {
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export const getDeviceByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_DEVICEBYID_REQUEST':
      return {
        loading: true,
        ...state
      };
    case 'GET_DEVICEBYID_SUCCESS':
      return {
        loading: false,
        device: action.payload
      };
    case 'GET_DEVICEBYID_FAILED':
      return {
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export const addDeviceReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_DEVICE_REQUEST':
      return {
        loading: true,
        ...state
      };
    case 'ADD_DEVICE_SUCCESS':
      return {
        loading: false,
        success: true
      };
    case 'ADD_DEVICE_FAILED':
      return {
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export const editDeviceReducer = (state = {}, action) => {
  switch (action.type) {
    case 'EDIT_DEVICE_REQUEST':
      return {
        editloading: true,
        ...state
      };
    case 'EDIT_DEVICE_SUCCESS':
      return {
        editloading: false,
        editsuccess: true
      };
    case 'EDIT_DEVICE_FAILED':
      return {
        editerror: action.payload,
        editloading: false
      };
    default:
      return state;
  }
};
