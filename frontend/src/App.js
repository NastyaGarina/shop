import { Route, Routes } from 'react-router-dom';

import { Header } from './layout/Header/Header';
import { Shop } from './pages/Shop/Shop';
import { Cart } from './pages/Cart/Cart';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { Order } from './pages/Order/Order';
import { AdminRouter } from './AdminRouter';
import { Device } from './pages/Device/Device';
import { Footer } from './layout/Footer/Footer';

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/admin/*" element={<AdminRouter />} />
        <Route path="/device/:deviceid" element={<Device />} />
      </Routes>
      <Footer />
    </div>
  );
};
