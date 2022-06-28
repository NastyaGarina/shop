import { Spinner, Container } from 'react-bootstrap';

import './Loading.css';

export const Loading = () => {
  return (
    <Container className="container" style={{ height: window.innerHeight - 54 }}>
      <Spinner animation="border" />
    </Container>
  );
};
