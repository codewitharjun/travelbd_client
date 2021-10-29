import React from "react";
import { Carousel } from "react-bootstrap";

const Packages = () => {
    return (
        <div id="packages">
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src= "https://i.ibb.co/NZpmMfw/image-3.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3 className="carousel-header">First slide label</h3>
                    <p className="carousel-text">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src= "https://i.ibb.co/cg6F9vy/image-4.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3 className="carousel-header">First slide label</h3>
                    <p className="carousel-text">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src= "https://i.ibb.co/jfHM3ZS/image.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3 className="carousel-header">First slide label</h3>
                    <p className="carousel-text">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src= "https://i.ibb.co/mRX24P7/image-6.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3 className="carousel-header">First slide label</h3>
                    <p className="carousel-text">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src= "https://i.ibb.co/r3S0p6K/image-1.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3 className="carousel-header">First slide label</h3>
                    <p className="carousel-text">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Packages;