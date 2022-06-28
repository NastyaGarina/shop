import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Container, Card, Form, Button } from 'react-bootstrap';

import { loginUser } from '../../actions/UserActions';
import { Error } from '../../components/Error/Error';
import { Loading } from '../../components/Loading/Loading';

export const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginState = useSelector((state) => state.loginUserReducer);
  const { error, loading } = loginState;

  let login = () => {
    const user = { ...form };
    dispatch(loginUser(user));
  };

  useEffect(() => {
    if (localStorage.getItem('currentUser')) {
      window.location.href = '/';
    }
  }, []);

  return (
    <>
      {loading && <Loading />}
      {error && <Error error="Invalid credentials" />}
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: window.innerHeight - 54 }}>
        <Card style={{ width: 600 }} className="p-4">
          <i className="fa fa-times backArrow" onClick={() => navigate('/')} />
          <h2 className="m-auto" style={{ color: '#198754' }}>
            Авторизация
          </h2>
          <Form className="d-flex flex-column">
            <Form.Control
              type="text"
              className="mt-3"
              placeholder="Введите ваш email..."
              value={form.email}
              onChange={(event) => {
                setForm((prevState) => ({
                  ...prevState,
                  email: event.target.value
                }));
              }}
              required
            />
            <Form.Control
              className="mt-3"
              placeholder="Введите ваш пароль..."
              type="password"
              value={form.password}
              onChange={(event) => {
                setForm((prevState) => ({
                  ...prevState,
                  password: event.target.value
                }));
              }}
              required
            />
            <div className="d-flex justify-content-between mt-3 pl-3 pr-3">
              <a href="/register">Click here to register</a>
              <Button variant="success" onClick={login}>
                Войти
              </Button>
            </div>
          </Form>
        </Card>
      </Container>
    </>
  );
};
