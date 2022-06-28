import { Carousel } from 'react-bootstrap';

export const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="../../images/slider1.jpeg" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="../../images/slider2.jpeg" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="../../images/slider3.jpeg" alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="../../images/slider4.jpeg" alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="../../images/slider5.jpeg" alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};
