import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data';
import './Hero.css';

const Hero = () => {
    return (
        <section id="about" className="hero-section">
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="hero-badge">Available for Work</div>
                    <h1 className="hero-title">
                        Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
                    </h1>
                    <h2 className="hero-subtitle">
                        {personalInfo.role}
                    </h2>
                    <p className="hero-description">
                        {personalInfo.summary}
                    </p>

                    <div className="hero-actions">
                        <a href="#projects" className="btn-primary">
                            View My Work <ArrowRight size={18} />
                        </a>
                        <a href="https://drive.google.com/file/d/1eV4XGFmCE1U1mmOr5LPCx9RWWCKm3Fku/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-outline">
                            Download CV <Download size={18} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="glow-circle"></div>
                    <div className="code-block glass-card">
                        <pre>
                            <code>
                                <span className="code-purple">const</span> <span className="code-blue">developer</span> = &#123;
                                {'\n'}  name: <span className="code-green">'{personalInfo.name}'</span>,
                                {'\n'}  role: <span className="code-green">'{personalInfo.role}'</span>,
                                {'\n'}  skills: [<span className="code-green">'React'</span>, <span className="code-green">'Next.js'</span>, <span className="code-green">'Node'</span>],
                                {'\n'}  hardWorker: <span className="code-purple">true</span>
                                {'\n'}&#125;;
                            </code>
                        </pre>
                    </div>
                </motion.div>
            </div>

            <div className="hero-bg-glow"></div>
        </section>
    );
};

export default Hero;
