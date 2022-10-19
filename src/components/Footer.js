import React from 'react';
// assets
import footerIcon1 from '../assets/img/footer-icon1.svg';
import footerIcon2 from '../assets/img/footer-icon2.svg';
import footerIcon3 from '../assets/img/footer-icon3.svg';
import footerIcon4 from '../assets/img/footer-icon4.svg';

export const Footer = () => {
    return (
        <footer className='footer' id='footer'>
            <div className="footer-social-icon">
                <a href="https://www.linkedin.com/in/iosif-dobos/"><img src={footerIcon1} alt="LinkedIn" /></a>
                <a href="http://instagram.com/josephberelly"><img src={footerIcon2} alt="Instagram" /></a>
                <a href="http://github.com/IosifDobos"><img src={footerIcon3} alt="GitHub" /></a>
                <a href="https://gitlab.com/IosifDobos"><img src={footerIcon4} alt="GitLab" /></a>
            </div>
            <p>&copy; Copyright 2022. All Rights Reserved</p>
        </footer>
    )
}
