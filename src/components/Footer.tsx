import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <img src="/logo.png" alt="Company Logo" className="footer-logo" />
                    <p>A well-designed gaming header often incorporates elements such as game characters, iconic symbols, vibrant colors, and dynamic visuals </p>
                </div>
                <div className="footer-section">
                    <h4>Company</h4>
                        <p>Products</p>
                        <p>App & Games</p>
                        <p>Features</p>
                </div>
                <div className="footer-section">
                    <h4>Help</h4>
                    <p>Support</p>
                    <p>About</p>
                    <p>Contact Us</p>
                </div>
                <div className="footer-section">
                    <h4>Resource</h4>
                    <p>Youtube Playlist</p>
                    <p>How To - Blog</p>
                    <p>Terms & Conditions</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© Copyright 2023, All Rights Reserved by board</p>
            </div>
        </footer>
    );
};

export default Footer;
