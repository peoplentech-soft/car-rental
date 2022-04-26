import { faFacebook, faLinkedin, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faMobile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="Footer">
            <div className="footer-container container-brand">
                <div className="footer-content row">
                    <div className="about col-md-4">
                        <h5>About Us</h5>
                        <p>Getting dressed up and traveling with good friends makes for a shared, unforgettable experience.</p>
                    </div>
                    <div className="contact col-md-4">
                        <h5>Contact Us</h5>
                        <p><FontAwesomeIcon icon={faMobile} className="contact-icon" /> +880 9613 337448 EXT: 2020</p>
                        <p><FontAwesomeIcon icon={faEnvelope} className="contact-icon" /> info@peoplentech.net</p>
                        <p><FontAwesomeIcon icon={faLocationDot} className="contact-icon" /> Good Luck Center 151/7 Green Road, 8th Floor Dhaka 1205 Bangladesh</p>

                        <div className="social-icons">
                            <FontAwesomeIcon icon={faFacebook} className="social-icon"/>
                            <FontAwesomeIcon icon={faTwitter} className="social-icon"/>
                            <FontAwesomeIcon icon={faPinterest} className="social-icon"/>
                            <FontAwesomeIcon icon={faLinkedin} className="social-icon"/>
                        </div>
                    </div>
                    <div className="newsletter col-md-4">
                        <h5>Newsletter</h5>
                        <p>Don't miss a thing! Sign up to receive daily deals</p>
                        <div className="newsletter-form">
                            <input type="email" class="form-control" placeholder="Enter your email..."/>
                            <button type="submit" class="btn submit-button">Submit</button>
                        </div>
                    </div>

                    <hr className="mt-5" />
                </div>
                <div className="footer-copyright">
                    <p>&copy; All rights reserved | Design & Developed By PeopleNtech Limited</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;