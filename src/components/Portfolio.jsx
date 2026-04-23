import React from 'react';
import './Portfolio.css';

// Using existing images as placeholders since image generation quota was reached
import farmMachineryImg from '../assets/images/bg1.png';
import smartAgImg from '../assets/images/bg2.jpg';
import greenhouseImg from '../assets/images/apples.png';
import weedMgmtImg from '../assets/images/spinach.png';

const Portfolio = () => {
    return (
        <section className="portfolio-section">
            <div className="container">
                <div className="portfolio-header">
                    <h2 className="title text-white">
                        Organic Farming Expertise<br />
                        And Success Portfolio
                    </h2>
                    <button className="btn portfolio-btn">Explore More</button>
                </div>

                <div className="portfolio-grid">
                    <div className="portfolio-card">
                        <img src={farmMachineryImg} alt="Farm Machinery" className="portfolio-img" />
                        <span className="portfolio-badge">Farm Machinery</span>
                    </div>
                    <div className="portfolio-card">
                        <img src={smartAgImg} alt="Smart Agriculture" className="portfolio-img" />
                        <span className="portfolio-badge">Smart Agriculture</span>
                    </div>
                    <div className="portfolio-card">
                        <img src={greenhouseImg} alt="Greenhouse Farming" className="portfolio-img" />
                        <span className="portfolio-badge">Greenhouse Farming</span>
                    </div>
                    <div className="portfolio-card">
                        <img src={weedMgmtImg} alt="Weed Management" className="portfolio-img" />
                        <span className="portfolio-badge">Weed Management</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
