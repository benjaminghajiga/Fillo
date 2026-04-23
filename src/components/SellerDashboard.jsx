import React from 'react';
import './Dashboard.css';

const SellerDashboard = ({ user, onLogout }) => {
    return (
        <div className="dashboard-container">
            <header className="dashboard-header seller-header">
                <div className="container header-inner">
                    <h1 className="logo text-accent">Fillo Seller</h1>
                    <nav className="dashboard-nav">
                        <a href="#inventory" className="nav-link active">Inventory</a>
                        <a href="#sales" className="nav-link">Sales</a>
                        <button className="btn btn-outline-dark" onClick={onLogout}>Logout</button>
                    </nav>
                </div>
            </header>

            <main className="dashboard-main container">
                <section className="welcome-section">
                    <h2>Welcome, <span className="text-accent">{user?.fullName || 'Farmer'}</span>!</h2>
                    <p>Manage your farm's inventory and view recent sales.</p>
                </section>

                <section className="dashboard-stats">
                    <div className="stat-card">
                        <h3>Total Sales</h3>
                        <p className="stat-value text-accent">$850.50</p>
                    </div>
                    <div className="stat-card">
                        <h3>Active Listings</h3>
                        <p className="stat-value">12</p>
                    </div>
                    <div className="stat-card">
                        <h3>Pending Orders</h3>
                        <p className="stat-value">3</p>
                    </div>
                </section>

                <section className="recent-activity">
                    <h3>Inventory Overview</h3>
                    <div className="activity-list">
                        <div className="activity-item">
                            <div className="activity-icon">🍎</div>
                            <div className="activity-details">
                                <h4>Crisp Apples</h4>
                                <p>50 lbs remaining</p>
                            </div>
                            <button className="btn btn-accent btn-sm">Edit</button>
                        </div>
                        <div className="activity-item">
                            <div className="activity-icon">🥬</div>
                            <div className="activity-details">
                                <h4>Leafy Spinach</h4>
                                <p>20 lbs remaining</p>
                            </div>
                            <button className="btn btn-accent btn-sm">Edit</button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default SellerDashboard;
