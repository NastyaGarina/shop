import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container, Card, Form, Button } from 'react-bootstrap';

import { registerUser } from '../../actions/UserActions';

import { Error } from '../../components/Error/Error';
import { Loading } from '../../components/Loading/Loading';
import { Success } from '../../components/Success/Success';

export const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [cpassword, setCpassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registerState = useSelector((state) => state.registerUserReducer);
  const { error, loading, success } = registerState;

  const regiater = () => {
    if (form.password !== cpassword) {
      alert('password not matched');
    } else {
      const user = { ...form };
      dispatch(registerUser(user));
      navigate('/login');
    }
  };

  return (
    <>
      {loading && <Loading />}
      {error && <Error error="Email already register" />}
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: window.innerHeight - 54 }}>
        <Card style={{ width: 600 }} className="p-4">
          <i className="fa fa-times backArrow" onClick={() => navigate('/')} />
          <h2 className="m-auto" style={{ color: '#198754' }}>
            Регистрация
          </h2>
          {success && <Success success="User registered successfully" />}
          <Form className="d-flex flex-column">
            <Form.Control
              type="text"
              className="mt-3"
              placeholder="Введите ваш name..."
              value={form.name}
              onChange={(event) => {
                setForm((prevState) => ({
                  ...prevState,
                  name: event.target.value
                }));
              }}
              required
            />
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
              placeholder="Введите  пароль..."
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
            <Form.Control
              className="mt-3"
              placeholder="Введите  пароль..."
              type="password"
              value={cpassword}
              required
              onChange={(event) => {
                setCpassword(event.target.value);
              }}
            />
            <div className="d-flex justify-content-between mt-3 pl-3 pr-3">
              <a href="/login">Click here to login</a>
              <Button variant="success" onClick={regiater}>
                Зарегистрироваться
              </Button>
            </div>
          </Form>
        </Card>
      </Container>
    </>
  );
};
