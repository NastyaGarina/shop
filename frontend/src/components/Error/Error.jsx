import { Container } from 'react-bootstrap';

export const Error = ({ error }) => {
  return (
    <Container className="container">
      <div>{error}</div>
    </Container>
  );
};
