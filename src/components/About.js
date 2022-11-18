import React from "react";
import { Col, Container, Row } from 'react-bootstrap';
import { AiFillDownCircle } from "react-icons/ai";
import { useTypewriter } from 'react-simple-typewriter';
// assets
import aboutImg from '../assets/img/github_image.png';

export const About = () => {

    const [text] = useTypewriter({
        words: ["Freelancer", "Developer", "Web Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    return (
        <section id="about" className="about">
            <h1>ABOUT ME</h1>
            <Container>
                <h5 className="title text-center m-heading text-secondary">ABOUT ME</h5>
                <Row className='about-content align-items-center'>
                    <Col size={12} xs={12} md={5} xl={6}>
                        <div className="img-container">
                            <img src={aboutImg} alt="Joseph Dobos" />
                        </div>
                    </Col>
                    <Col size={12} xs={12} md={7} xl={6}>
                        <div className="column-right">
                            <div className="text">I'm a <span>{text}</span></div>
                            <p>
                                I'm a graduate student at Technological University Dublin with a
                                BSc degree in Computer Science. I have pursued my internship at
                                Revenue where I have been involved on different projects working
                                with programming languages such as AngularJS, jQuery, JavaScript
                                as frontend, Java as backend and Jenkins to test and deploy the
                                applications. I love to learn and explore new technologies and
                                often amazed by how technology has grown in the recent years.
                            </p>
                        </div>
                        <Row className="align-items-center">
                            <Col size={12} xs={12} md={6} xl={6}>
                                <div className="contact-section">
                                    <h2>Contact Details</h2>
                                    <p className="address">
                                        <span>Iosif B. Dobos</span><br />
                                        <span>
                                            Dublin, Ireland
                                        </span><br />
                                        <span>+353894199005</span><br />
                                        <span>iosifdobos22@gmail.com</span>
                                    </p>
                                </div>
                            </Col>
                            <Col size={12} xs={12} md={6} xl={6}>
                                <div className="link-btn">
                                    <a type="button" href="https://drive.google.com/file/d/1kZzeo4SrKXJhEw53Djrv-_p0x6iKLqOv/view?ths=true" className="btn-md" target="_blank" rel="noopener noreferrer">
                                        Download CV<AiFillDownCircle size={25} className='icons' />
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};