import React from 'react';
import { Container, Carousel, Row, Col } from 'react-bootstrap';
import 'animate.css';
// images
import colorSharp2 from "../assets/img/color-sharp2.png";
import defaultUser from '../assets/img/user_icon.png';

export const Testimonials = () => {
    return (
        <section className='testimonials' id='testimonials'>
            <h1>TESTIMONIALS</h1>
            <Container>
                <h5 className="title text-center m-heading text-secondary">TESTIMONIALS</h5>
                <Carousel className='carousel slide text-center' data-mdb-ride="carousel">
                    <Carousel.Item className='text-center'>
                        <img className='rounded-circle shadow-1-strong md-4' src={defaultUser} alt="User Img" />
                        <Row className='d-flex justify-content-center'>
                            <Col lg="8">
                                <h3 className='mb-3 text'>John Doe</h3>
                                <p>Web Developer</p>
                                <p className="text-muted">
                                    Here you should write some nice things that someone has said
                                    about you. No lies though, employers can tell when you are
                                    lying.
                                </p>
                            </Col>
                        </Row>
                        <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="far fa-star fa-sm"></i></li>
                        </ul>
                    </Carousel.Item>
                    <Carousel.Item className='text-center'>
                        <img className='rounded-circle shadow-1-strong md-4' src={defaultUser} alt="User Img" />
                        <Row className='d-flex justify-content-center'>
                            <Col lg="8">
                                <h3 className='mb-3 text'>Anna Deynah</h3>
                                <p>UX Designer</p>
                                <p className="text-muted">
                                    That Iosif Dobos must be one of the most brilliant developers I've ever met!
                                    It is amazing that nobody has hired him yet. Hey you, you should hire this guy,
                                    he may be fresh out of University and have zero on the job experience but I am
                                    confident that he will be one of your best developers in no time!
                                </p>
                            </Col>
                        </Row>
                        <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="far fa-star fa-sm"></i></li>
                        </ul>
                    </Carousel.Item>
                    <Carousel.Item className='text-center'>
                        <img className='rounded-circle shadow-1-strong md-4' src={defaultUser} alt="User Img" />
                        <Row className='d-flex justify-content-center'>
                            <Col lg="8">
                                <h3 className='mb-3 text'>Kareem Abdul Jabbar</h3>
                                <p>Developer</p>
                                <p className="text-muted">
                                    our work is going to fill a large part of your life, and the only way to be
                                    truly satisfied is to do what you believe is great work. And the only way
                                    to do great work is to love what you do. If you haven't found it yet, keep
                                    looking. Don't settle. As with all matters of the heart, you'll know when
                                    you find it.
                                </p>
                            </Col>
                        </Row>
                        <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="far fa-star fa-sm"></i></li>
                        </ul>
                    </Carousel.Item>
                    <Carousel.Item className='text-center'>
                        <img className='rounded-circle shadow-1-strong md-4' src={defaultUser} alt="User Img" />
                        <Row className='d-flex justify-content-center'>
                            <Col lg="8">
                                <h3 className='mb-3 text'>Mr Abode</h3>
                                <p>Backend Developer</p>
                                <p className="text-muted">
                                    This is a version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                                    Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum,
                                    nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus
                                    a sit amet mauris.
                                </p>
                            </Col>
                        </Row>
                        <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="far fa-star fa-sm"></i></li>
                        </ul>
                    </Carousel.Item>
                </Carousel>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="Background Img" />
        </section>
    );
};