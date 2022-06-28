import { useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';

import './Devices.css';

export const Devices = ({ device }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Card className="cardDevice" onClick={() => navigate(`/device/${device._id}`)}>
        <Card.Img variant="top" src={device.image} />
        <Card.Body>
          <Card.Title>{device.category}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};
