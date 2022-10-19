import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// images
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";


export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className='skills' id='skills'>
            <Container>
                <Row>
                    <Col className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>What I do?</h2>
                            <p>Here are some of my expertise.</p>
                            <hr />
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Web Development" />
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Web Design" />
                                    <h5>Web Design</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="React" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Git" />
                                    <h5>Git</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="CSS" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="HTML 5" />
                                    <h5>HTML 5</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="JavaScript" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Java" />
                                    <h5>Java</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Python" />
                                    <h5>Python</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}