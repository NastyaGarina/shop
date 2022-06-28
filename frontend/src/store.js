import { combineReducers, createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';
import {
  getAllDevicesReducer,
  addDeviceReducer,
  getDeviceByIdReducer,
  editDeviceReducer
} from './reducers/DeviceReducers';
import { cartReducer } from './reducers/CartReducer';
import { loginUserReducer, registerUserReducer, getAllUsersReducer } from './reducers/UserReducer';
import {
  placeOrderReducer,
  getUserOrdersReducer,
  getAllOrdersReducer
} from './reducers/OrderReducer';

const finalReducer = combineReducers({
  getAllDevicesReducer: getAllDevicesReducer,
  cartReducer: cartReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
  placeOrderReducer: placeOrderReducer,
  getUserOrdersReducer: getUserOrdersReducer,
  addDeviceReducer: addDeviceReducer,
  getDeviceByIdReducer: getDeviceByIdReducer,
  editDeviceReducer: editDeviceReducer,
  getAllOrdersReducer: getAllOrdersReducer,
  getAllUsersReducer: getAllUsersReducer
});

const cartItems = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const currentUser = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser'))
  : null;

const initialState = {
  cartReducer: {
    cartItems: cartItems
  },
  loginUserReducer: {
    currentUser: currentUser
  }
};

const composeEnhancers = composeWithDevTools({});

export const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
