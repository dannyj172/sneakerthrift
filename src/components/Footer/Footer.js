import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <div className="footer-container">
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
                    <input type="email" placeholder="Enter your email address" className="footer-email" />
                    <input type="submit" value="Submit" className="footer-email-btn" />
                </div>
            </div>
        </div>
    )
}