import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container nav-container">
                <a href="#" className="logo">
                    MZ<span className="dot">.</span>
                </a>

                {/* Desktop Menu */}
                <div className="nav-links desktop-only">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="nav-link">
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="social-links desktop-only">
                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="mobile-link"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="mobile-socials">
                            <a href={personalInfo.github}><Github size={20} /></a>
                            <a href={personalInfo.linkedin}><Linkedin size={20} /></a>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
};

export default Navbar;
