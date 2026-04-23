import React from 'react';
import './Dashboard.css';

const BuyerDashboard = ({ user, onLogout }) => {
    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <div className="container header-inner">
                    <h1 className="logo text-primary-hero">Fillo</h1>
                    <nav className="dashboard-nav">
                        <a href="#market" className="nav-link active">Marketplace</a>
                        <a href="#orders" className="nav-link">My Orders</a>
                        <button className="btn btn-outline-dark" onClick={onLogout}>Logout</button>
                    </nav>
                </div>
            </header>

            <main className="dashboard-main container">
                <section className="welcome-section">
                    <h2>Welcome back, <span className="text-primary-hero">{user?.fullName || 'Buyer'}</span>!</h2>
                    <p>Ready to discover fresh produce from local farmers?</p>
                </section>

                <section className="dashboard-stats">
                    <div className="stat-card">
                        <h3>Active Orders</h3>
                        <p className="stat-value">2</p>
                    </div>
                    <div className="stat-card">
                        <h3>Saved Farmers</h3>
                        <p className="stat-value">5</p>
                    </div>
                    <div className="stat-card">
                        <h3>Total Spent</h3>
                        <p className="stat-value">$145.00</p>
                    </div>
                </section>

                <section className="recent-activity">
                    <h3>Recent Deliveries</h3>
                    <div className="activity-list">
                        <div className="activity-item">
                            <div className="activity-icon bg-primary-light">🍅</div>
                            <div className="activity-details">
                                <h4>Organic Tomatoes (5 lbs)</h4>
                                <p>From Green Valley Farm</p>
                            </div>
                            <div className="activity-status text-primary">Delivered</div>
                        </div>
                        <div className="activity-item">
                            <div className="activity-icon bg-accent">🥕</div>
                            <div className="activity-details">
                                <h4>Fresh Carrots (2 lbs)</h4>
                                <p>From Sunrise Agrics</p>
                            </div>
                            <div className="activity-status text-primary">Delivered</div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default BuyerDashboard;
