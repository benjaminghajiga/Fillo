import React from 'react';
import heroImg from '../assets/images/bg2.jpg';
import './Hero.css';

const Hero = ({ onJoinClick }) => {
    return (
        <>
            <section id="home" className="hero-section">
                <div className="container hero-container">
                    <div className="hero-text-content">
                        <div className="hero-badge">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="badge-icon"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /><path d="M12 8c-3.31 0-6 2.69-6 6h2c0-2.21 1.79-4 4-4s4 1.79 4 4h2c0-3.31-2.69-6-6-6z" /></svg>
                            Connecting Farmers & Consumers
                        </div>
                        <h1 className="hero-headline">
                            <span className="text-dark">From Soil to Soul</span><br />
                            <span className="text-primary-hero">Empowering Farmers,<br />Enriching Lives</span>
                        </h1>
                        <p className="hero-description">
                            Join Fillo's sustainable marketplace where
                            local farmers meet conscious consumers. Fresh
                            produce, transparent pricing, and direct
                            relationships.
                        </p>
                        <div className="hero-buttons">
                            <button className="btn hero-btn-primary" onClick={onJoinClick}>
                                Create Account
                            </button>
                            <button className="btn hero-btn-secondary">
                                Login
                            </button>
                        </div>
                    </div>
                    <div className="hero-image-content">
                        <img src={heroImg} alt="Fresh market produce" className="hero-image" />
                    </div>
                </div>
            </section>

            <section className="hero-stats-section">
                <div className="container">
                    <div className="stats-row">
                        <div className="stat-block">
                            <span className="stat-number">500+</span>
                            <span className="stat-label">Active Farmers</span>
                        </div>
                        <div className="stat-block">
                            <span className="stat-number">10k+</span>
                            <span className="stat-label">Happy Customers</span>
                        </div>
                        <div className="stat-block">
                            <span className="stat-number">98%</span>
                            <span className="stat-label">Satisfaction Rate</span>
                        </div>
                        <div className="stat-block">
                            <span className="stat-number">24/7</span>
                            <span className="stat-label">Support Available</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
