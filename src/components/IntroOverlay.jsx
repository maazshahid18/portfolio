import React, { useEffect, useState } from 'react';
import './IntroOverlay.css';

const IntroOverlay = () => {
    const [typedText, setTypedText] = useState('');
    const fullText = "> npm run dev\n> starting server...\n> v7.3.0 ready in 545ms";

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setTypedText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) {
                clearInterval(interval);
                // Auto-scroll after 2.5 seconds
                setTimeout(() => {
                    const scrollHeight = window.innerHeight; // Scroll down one full viewport height
                    window.scrollTo({
                        top: scrollHeight,
                        behavior: 'smooth'
                    });
                }, 2500);
            }
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="intro-overlay">
            <div className="terminal-window">
                <div className="terminal-header">
                    <div className="terminal-dot red"></div>
                    <div className="terminal-dot yellow"></div>
                    <div className="terminal-dot green"></div>
                </div>
                <div className="terminal-content">
                    <pre>{typedText}<span className="cursor">_</span></pre>
                </div>
                <div className="scroll-prompt">
                    [ SCROLL TO INITIALIZE ]
                </div>
            </div>
        </div>
    );
};

export default IntroOverlay;
