import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { projects } from '../data';
import './Projects.css';

const Projects = () => {
    return (
        <section id="projects" className="section-padding">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Featured Projects</h2>
                    <div className="section-line"></div>
                </motion.div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="project-top">
                                <Folder size={40} className="folder-icon" />
                                <div className="project-links">
                                    {project.links.github && (
                                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                            <Github size={20} />
                                        </a>
                                    )}
                                    {project.links.live && (
                                        <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>

                            <div className="project-tech">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
