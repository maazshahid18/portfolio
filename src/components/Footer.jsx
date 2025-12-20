import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <p className="footer-text">
                    Designed & Built by <span className="highlight">Maaz Bin Shahid</span>
                </p>
                <p className="copyright">© {new Date().getFullYear()} All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
