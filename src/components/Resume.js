import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
// images
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Resume = () => {
    return (
        <section className='resume' id='resume'>
            <h1>RESUME</h1>
            <Container>
                <Row className='align-items-center'>
                    <Col size={12}>
                        <h5 className="title text-center m-heading text-secondary">RESUME</h5>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <Tab.Container id='resume-tab' defaultActiveKey="first">
                                        <Nav variant='pills' className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Education</Nav.Link>
                                            </Nav.Item>

                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Work</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    <Col size={12}>
                                                        <div>
                                                            <h2>Technology University Dublin</h2>
                                                            <p className="info">BSc Degree in Computer Science <span>&bull;</span><em className="date">September 2020</em></p>
                                                            {/* <p>Bachelor Degree in Computer Science</p> */}
                                                        </div>
                                                        <div>
                                                            <h2>Access Foundation Programme TUD</h2>
                                                            <p className="info">Special Purpose Award Level 6 <span>&bull;</span><em className="date">September 2016</em></p>
                                                            {/* <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p> */}
                                                        </div>
                                                        <div>
                                                            <h2>Technical College 'Petru Poni' Roman, Romania</h2>
                                                            <p className="info">Bacalaureate Diploma <span>&bull;</span><em className="date">June 2011</em></p>
                                                            {/* <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p> */}
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <Row>
                                                    <Col size={12}>
                                                        <div>
                                                            <h2>Intern at Revenue</h2>
                                                            <p className="info">Software Developer<span>&bull;</span> <em className="date">February - August 2019</em></p>
                                                            <p>
                                                                Being involved in multiple projects where AngularJS, JavaScript and jQuery programming language was used
                                                                to developed the frontend, Java Spring boot to manage the backend where the applications was tested and
                                                                deployed in Jenkins. Engaged in all phases of the software development lifecycle which include gathering
                                                                business system requirements. Participated in weekly meeting discussing the stage of the projects and
                                                                planning future work. Testing and debug applications to meet business needs and interacting with the third
                                                                party partners in the achievement of business initiatives.
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <h2>IDM Construction LTD</h2>
                                                            <p className="info">Arnotts Maintenance<span>&bull;</span> <em className="date">January 2016 - Present / Part-time</em></p>
                                                            <p>
                                                                Comply with the company plans and vision and working at my best to achieve the goals.
                                                                Working under time pressure as every job had to be finished before shop opens to give customers the
                                                                comfort while shopping.
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <h2>Adrian Iacob Dry Wall LTD - Dublin</h2>
                                                            <p className="info">Supervisor<span>&bull;</span> <em className="date">Summer 2015 / Part-time</em></p>
                                                            <p>
                                                                Set goals for performance and deadlines in ways that comply with the company plan and vision.
                                                                Organizing workflow and ensuring that employees understand their duties or delegated tasks.
                                                                Monitoring employee productivity and providing constructive feedback and coaching.
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <h2>Professional Footbal Player</h2>
                                                            <p className="info">Left Middfielder<span>&bull;</span> <em className="date">2011 - 2012 FC Bohemians, 2012 - 2013 FC Glasnevin, 2013 - Ongoing FC Real Transilvania</em></p>
                                                            <p>
                                                                Taking part in many competitions as part of the club, and training hard to improve my skills and ability.
                                                                Adapted to the high pressure, extremely competitive environment, and collaborated with team members to achieve team goals.
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <h2>Summer Together Project, Roman, Romania</h2>
                                                            <p className="info">Mentor<span>&bull;</span> <em className="date">2009 - 2010, 2010 - 2011</em></p>
                                                            <p>
                                                                The Project’s goal was to provide favourable conditions for children to learn more and to behave better
                                                                during summer holiday, included a program of education, culture and arts, set up especially for children
                                                                with lower financial status. The main responsibility looking after group of children between six and fifteen
                                                                years of age, researching for a variety of children games and other activities. During mentoring time, helped
                                                                children to communicate with each other and discover the professional universe they dream of.
                                                            </p>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="Bckg Img"></img>

        </section>
    );
};