import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useTypewriter } from 'react-simple-typewriter';
import { AiFillGithub, AiFillBook } from 'react-icons/ai'
import TrackVisibility from 'react-on-screen';
import 'animate.css';
// images
import headerImg from '../assets/img/header-img.svg'

export const Home = () => {

    const [text] = useTypewriter({
        words: ["Freelancer", "Developer", "Web Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col size={12} xs={12} md={7} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1 className='title-name'>Hi! I'm Joseph</h1>
                                    <h2 className='job-description'>And I'm a <span>{text}</span></h2>
                                    <p>
                                        Graduate student at Technological University Dublin with a degree in Computer Science.
                                        I love to build things and discover new technologies. As part of my degree I have built
                                        numerous projects which can be found on Projects section by clicking on the button
                                        bellow or by visiting my GitHub page. Also, for more information about my
                                        work experience, kills and education, click on the Resume button bellow.
                                    </p>

                                    <div className="link-btn">
                                        <a href='#projects' role='button' aria-pressed='true' className='btn-md btn-space'><AiFillGithub size="25" className='proj-img' />Projects</a>
                                        <a href="#resume" className="btn-md "><AiFillBook size="25" /> My Resume</a>
                                    </div>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col size={12} xs={12} md={5} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <div className="column-right">
                                        <img src={headerImg} alt="Header Img" />
                                    </div>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
