import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { personalInfo } from '../data';
import './Contact.css';

const Contact = () => {
    const formRef = useRef();
    const [status, setStatus] = useState('idle'); // idle, sending, success, error
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS CREDENTIALS
    const SERVICE_ID = "service_w18yq5m";
    const TEMPLATE_ID = "template_emckcun";
    const PUBLIC_KEY = "j6OzSPxkdB-wdCUJe";

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!TEMPLATE_ID || TEMPLATE_ID === "YOUR_TEMPLATE_ID") {
            alert("Please add your EmailJS Template ID in Contact.jsx");
            return;
        }

        setStatus('sending');

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                setFormData({ user_name: '', user_email: '', message: '' });
                setTimeout(() => setStatus('idle'), 3000);
            }, (error) => {
                console.log(error.text);
                setStatus('error');
                setTimeout(() => setStatus('idle'), 3000);
            });
    };

    return (
        <section id="contact" className="section-padding">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Initialize Contact</h2>
                    <div className="section-line"></div>
                </motion.div>

                <div className="contact-grid">
                    <motion.div
                        className="contact-info-card glass-card"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="contact-subtitle">Transmission Channels</h3>

                        <div className="info-item">
                            <div className="icon-box">
                                <Mail size={22} />
                            </div>
                            <div className="info-text">
                                <span className="label">Email Protocol</span>
                                <a href={`mailto:${personalInfo.email}`} className="value">{personalInfo.email}</a>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-box">
                                <Phone size={22} />
                            </div>
                            <div className="info-text">
                                <span className="label">Voice Line</span>
                                <span className="value">{personalInfo.phone}</span>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-box">
                                <MapPin size={22} />
                            </div>
                            <div className="info-text">
                                <span className="label">Base Operations</span>
                                <span className="value">{personalInfo.location}</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        className="contact-form glass-card"
                        ref={formRef}
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="form-group">
                            <label>Identity</label>
                            <input
                                type="text"
                                name="user_name"
                                value={formData.user_name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Return Address</label>
                            <input
                                type="email"
                                name="user_email"
                                value={formData.user_email}
                                onChange={handleChange}
                                placeholder="Enter email address"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Data Payload</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                placeholder="Enter your message"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className={`btn-primary submit-btn ${status}`}
                            disabled={status === 'sending'}
                        >
                            {status === 'idle' && <>Transmit Data <Send size={18} /></>}
                            {status === 'sending' && <>Transmitting... <Loader2 size={18} className="spin" /></>}
                            {status === 'success' && <>Transmission Complete!</>}
                            {status === 'error' && <>Transmission Failed</>}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
