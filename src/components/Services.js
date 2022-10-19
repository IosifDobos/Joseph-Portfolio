import React from "react";
import { Container } from 'react-bootstrap';
import 'animate.css';

export const Services = () => {
    return (
        <section className="services" id="services">
            <h1>SERVICES</h1>
            <Container>
                <h5 className="title text-center m-heading text-secondary">SERVICES</h5>
                <div className="service-content">
                    <div className="main" >
                        <div className="service">
                            <div className="service-logo">
                                <i className="bx bxl-html-5 bx-lg"></i>
                            </div>
                            <h4>Web Development</h4>
                            <p> I have experience building websites using JavaScript, AngularJS, React,
                                HTML, CSS as frontend and Java, Python, Flask and Django as backend.
                            </p>
                        </div>
                        <div className="shadow-one"></div>
                        <div className="shadow-two"></div>
                    </div>

                    <div className="main" >
                        <div className="service">
                            <div className="service-logo">
                                <i className="bx bxl-html-5 bx-lg"></i>
                            </div>
                            <h4>Algorithm & Data Structures</h4>
                            <p>
                                As part of my degree in Computer Science, I have good background
                                over fundamental concepts of DSA.
                                <br /><br />
                            </p>
                        </div>
                        <div className="shadow-one"></div>
                        <div className="shadow-two"></div>
                    </div>

                    <div className="main">
                        <div className="service">
                            <div className="service-logo">
                                <i className="bx bxl-html-5 bx-lg"></i>
                            </div>
                            <h4>Dev Ops</h4>
                            <p>
                                I have pursued my internship at Revenue, being involved
                                in a DevOps team working with tools like Jenkins and Doker.
                                <br /><br />
                            </p>
                        </div>
                        <div className="shadow-one"></div>
                        <div className="shadow-two"></div>
                    </div>
                </div>
            </Container>
        </section>
    );
};