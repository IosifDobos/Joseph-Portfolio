import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Container, Nav, Navbar } from 'react-bootstrap';
// assets
// import navIcon1 from '../assets/img/nav-icon1.svg';
// import navIcon2 from '../assets/img/nav-icon2.svg';
// import navIcon3 from '../assets/img/nav-icon3.svg'
// import navIcon4 from '../assets/img/nav-icon4.svg'

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    // function for active menu
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const updateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Router>
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='ms-auto'>
                            <Nav.Link href='#home' className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link href='#about' className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('about')}>About</Nav.Link>
                            <Nav.Link href='#resume' className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('resume')}>Resume</Nav.Link>
                            <Nav.Link href='#projects' className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('projects')}>Projects</Nav.Link>
                            <Nav.Link href='#testimonials' className={activeLink === 'testimonials' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('testimonials')}>Testimonials</Nav.Link>
                        </Nav>
                        <span className='navbar-text'>
                            {/* <div className="social-icon">
                                <a href="https://www.linkedin.com/in/iosif-dobos/"><img src={navIcon1} alt="LinkedIn" /></a>
                                <a href="http://instagram.com/josephberelly"><img src={navIcon2} alt="Instagram" /></a>
                                <a href="http://github.com/IosifDobos"><img src={navIcon3} alt="GitHub" /></a>
                                <a href="https://gitlab.com/IosifDobos"><img src={navIcon4} alt="GitLab" /></a>
                            </div> */}
                            <HashLink to="#contact">
                                <button className='vvd'><span>Let's Connect</span></button>
                            </HashLink>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    )
}