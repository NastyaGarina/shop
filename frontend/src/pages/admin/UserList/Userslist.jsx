import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';

import { addAdmin, deleteUser, getAllUsers } from '../../../actions/UserActions';

import { Error } from '../../../components/Error/Error';
import { Loading } from '../../../components/Loading/Loading';

import './UserList.css';

export const UserList = () => {
  const dispatch = useDispatch();

  const usersstate = useSelector((state) => state.getAllUsersReducer);
  const { error, loading, users } = usersstate;

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <>
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
      {users && !loading && !error && (
        <div className="containerTable">
          <div className="title">User List</div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>isAdmin</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((user, i) => (
                  <tr key={i}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      {user.isAdmin ? (
                        <h1>Admin</h1>
                      ) : (
                        <Button
                          variant="danger"
                          onClick={() => {
                            dispatch(addAdmin(user._id));
                          }}>
                          isAdmin
                        </Button>
                      )}
                    </td>
                    <td>
                      <div className="content">
                        <div
                          className="icon icon-fill"
                          onClick={() => {
                            dispatch(deleteUser(user._id));
                          }}>
                          <i className="fa fa-times" />
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
