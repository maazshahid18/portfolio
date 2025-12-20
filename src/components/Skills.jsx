import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';
import './Skills.css';

const Skills = () => {
    return (
        <section id="skills" className="section-padding">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Technical Arsenal</h2>
                    <div className="section-line"></div>
                </motion.div>

                <div className="skills-grid">
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={category}
                            className="skill-category-card glass-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="skill-category-title">{category}</h3>
                            <div className="skill-tags-container">
                                {items.map((skill, i) => (
                                    <span key={i} className="skill-pill">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
