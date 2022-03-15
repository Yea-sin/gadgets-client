import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
         <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/85XjpzS/20220305-1646458983-409478.png"
      alt="First slide"
      height="340px"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/4Svf2vK/20220308-1646715824-277538.png"
      alt="Second slide"
      height="340px"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/MGqXMWb/20220122-1642837946-615179.png"
      alt="Third slide"
      height="340px"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>   
        </>
    );
};

export default Banner;