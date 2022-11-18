import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useTypewriter } from 'react-simple-typewriter';
import { AiFillGithub, AiFillFolderOpen } from 'react-icons/ai'
import TrackVisibility from 'react-on-screen';
import 'animate.css';
// assets
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg'
import navIcon4 from '../assets/img/nav-icon4.svg'
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
                                    <div className="social-icon">
                                        <a href="https://www.linkedin.com/in/iosif-dobos/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
                                        <a href="http://instagram.com/josephberelly" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Instagram" /></a>
                                        <a href="http://github.com/IosifDobos" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="GitHub" /></a>
                                        <a href="https://gitlab.com/IosifDobos" target="_blank" rel="noopener noreferrer"><img src={navIcon4} alt="GitLab" /></a>
                                    </div>

                                    <div className="link-btn">
                                        <a href='#projects' className='btn-md'>Projects<AiFillGithub size={25} className='icons' /></a>
                                        <a href="#resume" className="btn-md btn-space">My Resume<AiFillFolderOpen size={25} className='icons' /></a>
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
