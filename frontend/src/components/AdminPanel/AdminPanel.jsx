import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './AdminPanel.css';

export const AdminPanel = () => {
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;

  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.href = '/';
    }
  }, []);

  return (
    <div>
      <div className="row justify-content-center p-3">
        <div className="col-md-10">
          <h2 className="adminTitle">Admin Panel</h2>
          <ul className="adminfunctions">
            <li>
              <Link to={'/admin/userslist'}>Users List</Link>
            </li>
            <li>
              <Link to={'/admin/deviceslist'}>Devices List</Link>
            </li>
            <li>
              <Link to={'/admin/orderslist'}>Orders List</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
