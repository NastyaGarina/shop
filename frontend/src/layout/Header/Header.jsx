import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

import { logoutUser } from '../../actions/UserActions';

import './Header.css';

export const Header = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  const dispatch = useDispatch();

  return (
    <div className="header">
      <Navbar bg="light" variant="light">
        <Container style={{ justifyContent: 'space-around' }}>
          <Navbar.Brand style={{ fontSize: '28px' }} href="/">
            WWW
          </Navbar.Brand>
          <Nav className="ml-auto">
            {currentUser ? (
              <>
                <Nav className="me-auto">
                  <NavDropdown title={currentUser.name} id="collasible-nav-dropdown">
                    {currentUser.isAdmin ? (
                      <NavDropdown.Item href="/admin/userslist">Admin</NavDropdown.Item>
                    ) : (
                      <></>
                    )}
                    <NavDropdown.Item href="/orders">Orders</NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() => {
                        dispatch(logoutUser());
                      }}>
                      <li>Logout</li>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Link
                  className="headerLink"
                  style={{
                    margin: '8px'
                  }}
                  to="/cart">
                  <i className="fa fa-shopping-cart" /> {cartState.cartItems.length}
                </Link>
              </>
            ) : (
              <Link
                className="headerLink"
                style={{
                  margin: '8px 0 0 0'
                }}
                to="/login">
                Login
              </Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
