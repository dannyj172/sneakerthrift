import './Footer.css';

import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser'

export const Footer = () => {

    const [showPopup, setShowPopup] = useState(false);

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_z3t8a2nn', 'template_172382341231', form.current, 'JB9zZW5YUBkCck2gK')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        form.current.reset()

        setShowPopup(true);

        setTimeout(() => {
            setShowPopup(false);
        }, 4000);

    };


    return (
        <div className="footer-container">
            {showPopup && (
                <div className="popup">
                    <p className="popup-text">Welcome!</p>
                </div>
            )}

            <div className="footer">
                <div className="footer-heading footer-1">
                    <h2>About us</h2>
                    <Link to="#">Blog</Link>
                    <Link to="#">Customers</Link>
                    <Link to="#">What we do</Link>
                    <Link to="#">Terms of Service</Link>
                </div>
                <div className="footer-heading footer-2">
                    <h2>Contact us</h2>
                    <Link to="#">Jobs</Link>
                    <Link to="#">FAQ</Link>
                    <Link to="#">Support</Link>
                    <Link to="#">Contact</Link>
                </div>
                <div className="footer-heading footer-3">
                    <h2>Social Media</h2>
                    <Link to="#">Twitter</Link>
                    <Link to="#">Youtube</Link>
                    <Link to="#">Facebook</Link>
                    <Link to="#">Instagram</Link>
                </div>
                <div className="footer-email-form">
                    <h2>Join us</h2>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="email" name="user_email" placeholder="Enter your email address" className="footer-email" />
                        <input type="submit" value="Submit" className="footer-email-btn" />
                    </form>
                </div>
            </div>
        </div>
    )
}