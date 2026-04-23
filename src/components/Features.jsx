import React from 'react';
import './Features.css';

const Features = () => {
    const featureList = [
        {
            icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1A5E2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 3 1.66 1.66a2 2 0 0 0 1.42.59H20a1 1 0 0 1 .9 1.45l-3.32 6.64a2 2 0 0 1-1.79 1.11H7"></path><path d="M7 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"></path><path d="M17 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"></path></svg>,
            title: 'Smart Marketplace',
            desc: 'Connect directly with local farmers to get the freshest produce at transparent prices.'
        },
        {
            icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1A5E2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="13" x="2" y="5" rx="2"></rect><path d="M18 5h2a2 2 0 0 1 2 2v6Z"></path><path d="M18 10h4"></path><path d="M6 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M18 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path></svg>,
            title: 'Efficient Logistics',
            desc: 'Our delivery partners ensure your fresh items are delivered quickly and safely.'
        },
        {
            icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1A5E2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 4 13V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9a7 7 0 0 1-7 7z"></path><path d="M4 13h10"></path></svg>,
            title: 'Sustainable Practice',
            desc: 'Support environmentally friendly farming and reduce carbon footprints by buying local.'
        }
    ];

    return (
        <section id="features" className="features">
            <div className="container">
                <div className="features-header">
                    <h2 className="title">Why Choose <span className="text-primary">Fillo</span>?</h2>
                    <p className="subtitle">We empower farmers and delight consumers through a transparent, tech-driven agricultural ecosystem.</p>
                </div>

                <div className="features-grid">
                    {featureList.map((feature, index) => (
                        <div className="feature-card" key={index}>
                            <div className="feature-icon">{feature.icon}</div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-desc">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
