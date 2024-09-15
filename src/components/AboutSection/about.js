import React, { useState } from 'react';
import './about.css';

const About = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index); 
    };

    return (
        <section id="about">
            <h2 className="aboutTitle">Random Facts About Me</h2>
            
            <div className="accordion">
                <div className="faq-item">
                    <div className="faq-question" onClick={() => toggleFaq(0)}>
                        Who are you?
                    </div>
                    {openFaq === 0 && (
                        <div className="faq-answer">
                            <p>My name is Christian my close ones call me Torran.<br /> I love to experiment with life and opportunities because we only have one life to enjoy</p>
                        </div>
                    )}
                </div>
                
                <div className="faq-item">
                    <div className="faq-question" onClick={() => toggleFaq(1)}>
                        What are your hobbies?
                    </div>
                    {openFaq === 1 && (
                        <div className="faq-answer">
                            <p>I enjoy Drawing, Playing arnis,<br />and listening to music,</p>
                        </div>
                    )}
                </div>

                <div className="faq-item">
                    <div className="faq-question" onClick={() => toggleFaq(2)}>
                        What is your talent
                    </div>
                    {openFaq === 2 && (
                        <div className="faq-answer">
                            <p>Did you know I can solve a Rubik's cube in under a minute? Just hand me a rubiks cube!</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default About;