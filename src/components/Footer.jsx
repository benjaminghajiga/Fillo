import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="agrotech-footer">
            <div className="footer-left">
                <div className="newsletter-wrapper">
                    <span className="newsletter-badge">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M12 8v4l3 3"/></svg>
                        FOR LATEST UPDATES
                    </span>
                    <h2 className="newsletter-title">Join Our Newsletter</h2>
                    
                    <div className="newsletter-form-container">
                        <input type="email" placeholder="Email" className="newsletter-input" />
                        <button className="btn newsletter-submit">Submit</button>
                    </div>

                    <div className="newsletter-consent">
                        <input type="checkbox" id="consent" />
                        <label htmlFor="consent">
                            You will able to unsubscribe anytime. Ready our<br/> 
                            Privacy policy here. <span className="underline">Terms & Conditions</span>
                        </label>
                    </div>
                </div>
            </div>

            <div className="footer-right">
                <div className="footer-top">
                    <div className="brand-logo">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                        Fillo
                    </div>
                    <div className="social-links">
                        <span>Follow Us:</span>
                        <a href="#"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
                        <a href="#"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></a>
                        <a href="#"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg></a>
                        <a href="#"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg></a>
                    </div>
                </div>

                <div className="footer-middle">
                    <div className="footer-col">
                        <h4>Got A Question?</h4>
                        <ul className="contact-info">
                            <li>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                                <span>Jalingo<br/>Nigeria, Taraba</span>
                            </li>
                            <li>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                                <span>+2349124294337</span>
                            </li>
                            <li>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                                <span>info@example.com</span>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul className="footer-nav">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Frequent QA's</a></li>
                            <li><a href="#">Projects</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Services</h4>
                        <ul className="footer-nav">
                            <li><a href="#">Soil & Field Analysis</a></li>
                            <li><a href="#">Crop Planning</a></li>
                            <li><a href="#">Pest & Disease Control</a></li>
                            <li><a href="#">Indoor Plantation Support</a></li>
                            <li><a href="#">Harvest & Post-Harvest Solutions</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom-bar">
                    <p className="copyright">&copy;Fillo all rights reserved.</p>
                    <div className="legal-links">
                        <a href="#">Privacy Policy</a> / <a href="#">Terms Of Service</a>
                    </div>
                </div>
                
                
            </div>
        </footer>
    );
};

export default Footer;
