import React from 'react'
import './Footer.css';

import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <div class="footer-container">
            <div class="footer">
                <div class="footer-heading footer-1">
                    <h2>About us</h2>
                    <Link href="#">Blog</Link>
                    <Link href="#">Customers</Link>
                    <Link href="#">What we do</Link>
                    <Link href="#">Terms of Service</Link>
                </div>
                <div class="footer-heading footer-2">
                    <h2>Contact us</h2>
                    <Link href="#">Jobs</Link>
                    <Link href="#">FAQ</Link>
                    <Link href="#">Support</Link>
                    <Link href="#">Contact</Link>
                </div>
                <div class="footer-heading footer-3">
                    <h2>Social Media</h2>
                    <Link href="#">Twitter</Link>
                    <Link href="#">Youtube</Link>
                    <Link href="#">Facebook</Link>
                    <Link href="#">Instagram</Link>
                </div>
                <div class="footer-email-form">
                    <h2>Join us</h2>
                    <input type="email" placeholder="Enter your email address" id="footer-email" />
                    <input type="submit" value="Submit" id="footer-email-btn" />
                </div>
            </div>
        </div>
    )
}