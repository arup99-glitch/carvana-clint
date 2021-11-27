import React from "react";
import { Carousel } from "react-bootstrap";

import "./Slide.css";

/* ths is the carousel, which is used in home component  */
const Slider = () => {
  return (
    <>
    <Carousel className="container-fluid my-1 ">
  <Carousel.Item>
    <img 
      className="d-block w-100"
      src="https://cdnb.artstation.com/p/assets/images/images/026/031/761/large/umaru-jalloh-funny-car-shot-01.jpg?1587669896"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src="https://static.startuptalky.com/2021/07/Automobile-business-idea-Car-business-idea---startuptalky-1.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src="https://coolmaterial.com/wp-content/uploads/2017/02/make-car-last-forever.jpg"
      alt="Third slide"
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

export default Slider;
