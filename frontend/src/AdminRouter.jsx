import { Route, Routes } from 'react-router-dom';

import { AdminPanel } from './components/AdminPanel/AdminPanel';
import { DevicesList } from './pages/admin/DevicesList/DevicesList';
import { EditDevice } from './pages/admin/EditDevice/EditDevice';
import { OrderList } from './pages/admin/OrderList/Orderslist';
import { UserList } from './pages/admin/UserList/Userslist';

export const AdminRouter = () => {
  return (
    <div>
      <AdminPanel />
      <Routes>
        <Route path="/userslist" element={<UserList />} />
        <Route path="/orderslist" element={<OrderList />} />
        <Route path="/deviceslist" element={<DevicesList />} />
        <Route path="/editdevice/:deviceid" element={<EditDevice />} />
      </Routes>
    </div>
  );
};
