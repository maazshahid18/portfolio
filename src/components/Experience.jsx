import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { experience } from '../data';
import './Experience.css';

const Experience = () => {
    return (
        <section id="experience" className="section-padding">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Experience Operations</h2>
                    <div className="section-line"></div>
                </motion.div>

                <div className="timeline">
                    <div className="timeline-line"></div>

                    {experience.map((job, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="timeline-dot"></div>
                            <div className={`timeline-content ${index % 2 === 0 ? 'left' : 'right'}`}>
                                <div className="glass-card job-card">
                                    <div className="job-header">
                                        <h3 className="job-title">{job.title}</h3>
                                        <span className="company-name">@ {job.company}</span>
                                    </div>

                                    <div className="job-meta">
                                        <div className="meta-item">
                                            <Calendar size={14} />
                                            <span>{job.duration}</span>
                                        </div>
                                        <div className="meta-item">
                                            <MapPin size={14} />
                                            <span>{job.location}</span>
                                        </div>
                                    </div>

                                    <ul className="job-achievements">
                                        {job.achievements.map((achievement, i) => (
                                            <li key={i}>{achievement}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
