import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Code2, Database, Layout, Server, Zap, Globe } from 'lucide-react';
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
                        <a href="https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto" target="_blank" rel="noopener noreferrer" className="btn-outline">
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
                    <div className="floating-tech-grid">
                        <div className="tech-widget widget-blue">
                            <div className="widget-icon">
                                <Layout size={24} />
                            </div>
                            <h3>Frontend</h3>
                            <p>React, Next.js</p>
                        </div>
                        <div className="tech-widget widget-purple">
                            <div className="widget-icon">
                                <Server size={24} />
                            </div>
                            <h3>Backend</h3>
                            <p>Node, NestJS</p>
                        </div>
                        <div className="tech-widget widget-green">
                            <div className="widget-icon">
                                <Database size={24} />
                            </div>
                            <h3>Database</h3>
                            <p>SQL, Mongo</p>
                        </div>
                        <div className="tech-widget widget-orange">
                            <div className="widget-icon">
                                <Zap size={24} />
                            </div>
                            <h3>Speed</h3>
                            <p>Optimized</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="hero-bg-glow"></div>
        </section>
    );
};

export default Hero;
