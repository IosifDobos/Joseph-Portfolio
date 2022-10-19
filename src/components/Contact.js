import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import emailjs from '@emailjs/browser';
// assetest
import envContact from '../assets/svg/bx-envelope.svg';
import phoneContact from '../assets/svg/bx-phone.svg';
import mapContact from '../assets/svg/bx-map.svg';

export const Contact = () => {
    // declaring initial form state object
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [btnText, setBtnText] = useState('Submit');
    const [status, setStatus] = useState({});


    const handleSubmit = (e) => {
        e.preventDefault();
        setBtnText('Sending...');
        // email content
        const emailContent = {
            to_name: 'Joseph',
            from_name: name,
            email: email,
            subject: subject,
            message: message

        };
        setBtnText('Submit');

        emailjs.send('service_p0stkis', 'template_pgu5xh7', emailContent, 'hUujjpPMhATrWNhph')
            .then((result) => {
                setStatus({ success: true, message: 'Form submitted successfully' });
            }, (error) => {
                setStatus({ success: false, message: 'Something went wrong, please try again later!' });
            })
    };

    return (
        <section className='contact' id='contact'>
            <h1>CONTACT</h1>
            <Container>
                <h5 className="title text-center m-heading text-secondary">CONTACT</h5>
                <Row className='align-items-center contact-content'>
                    {/* Submission Form */}
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <div className="column left">
                                        <h2>Get In Touch</h2>
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name='name'
                                                    placeholder="Full Name"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    name='email'
                                                    placeholder="Email Address"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    placeholder="Subject"
                                                    name='subject'
                                                    value={subject}
                                                    onChange={(e) => setSubject(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <textarea
                                                    rows="6"
                                                    placeholder="Your Message"
                                                    name='message'
                                                    value={message}
                                                    onChange={(e) => setMessage(e.target.value)}
                                                    required
                                                ></textarea>
                                            </div>
                                            <button type="submit" className='btn-md'><span>{btnText}</span></button>
                                            <div className="status-message">
                                                {status.message &&
                                                    <p className={status.success === false ? "danger" : "success"}>
                                                        {status.message}
                                                    </p>
                                                }
                                            </div>
                                        </form>
                                    </div>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    {/* Contact details */}
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <div className="column right">
                                        <h2>Contact Info</h2>
                                        <p className="lead">
                                            For more information about me, please fill out the form and
                                            I'll reach to you as soon as possible. Thank you!
                                        </p>
                                        <div className="items">
                                            <div className="item">
                                                <img src={envContact} alt='Envelope SVG' />
                                                <div className="text">
                                                    <h3>Email</h3>
                                                    <p><span>josephberellyy22@gmail.com</span></p>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <img src={phoneContact} alt='Phone SVG' />
                                                <div className="text">
                                                    <h3>Phone</h3>
                                                    <p><span>+353 894199005</span></p>
                                                </div>
                                            </div>

                                            <div className="item">
                                                <img src={mapContact} alt='Map SVG' />
                                                <div className="text">
                                                    <h3>Address</h3>
                                                    <p><span>Cedarwood Rise, Glasnevin</span></p>
                                                    <p><span>Dublin, Ireland</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
