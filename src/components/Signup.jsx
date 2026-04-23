import React, { useState } from 'react';
import './Signup.css';

const Signup = ({ onBack, onLogin }) => {
    const [role, setRole] = useState(null); // 'buyer' | 'seller' | null
    const [step, setStep] = useState(1); // 1 = Role select, 2 = Form

    // Buyer Form State
    const [buyerData, setBuyerData] = useState({
        fullName: '', email: '', phone: '', password: '', state: '', city: '', address: '', produce: '', delivery: ''
    });

    // Seller Form State
    const [sellerData, setSellerData] = useState({
        fullName: '', email: '', phone: '', password: ''
    });

    const handleRoleSelect = (selectedRole) => {
        setRole(selectedRole);
    };

    const handleNext = () => {
        if (role) setStep(2);
    };

    const renderRoleSelection = () => (
        <div className="role-selection-screen animate-fade-in">
            <div className="signup-header">
                <h2 className="title">Join <span className="text-primary-hero">Fillo</span></h2>
                <p className="subtitle">Select your account type to get started</p>
            </div>

            <div className="role-cards-container">
                <div
                    className={`role-card ${role === 'buyer' ? 'selected' : ''}`}
                    onClick={() => handleRoleSelect('buyer')}
                >
                    <div className="role-card-image buyer-img"></div>
                    <div className="role-card-content">
                        <h3>Buy Fresh Produce</h3>
                        <p>Get fresh farm produce directly from farmers</p>
                        <div className="role-cta">
                            <div className="radio-circle"></div>
                            <span>Select Buyer</span>
                        </div>
                    </div>
                </div>

                <div
                    className={`role-card ${role === 'seller' ? 'selected' : ''}`}
                    onClick={() => handleRoleSelect('seller')}
                >
                    <div className="role-card-image seller-img"></div>
                    <div className="role-card-content">
                        <h3>Sell Farm Produce</h3>
                        <p>Sell your farm products to verified buyers</p>
                        <div className="role-cta">
                            <div className="radio-circle"></div>
                            <span>Select Seller</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="signup-actions">
                <button className="btn btn-outline-dark" onClick={onBack}>Cancel</button>
                {role && (
                    <button className="btn hero-btn-primary animate-slide-up" onClick={handleNext}>
                        Next Step
                    </button>
                )}
            </div>
        </div>
    );

    const renderBuyerForm = () => (
        <div className="form-screen animate-fade-in">
            <button className="back-btn" onClick={() => setStep(1)}>← Back to Roles</button>
            <div className="form-header">
                <div className="badge">Buyer Account</div>
                <h2 className="title">Create Buyer Account</h2>
                <p className="subtitle">Fast and secure registration format</p>
            </div>

            <form className="auth-form" onSubmit={(e) => { e.preventDefault(); onLogin('buyer', buyerData); }}>
                <div className="form-grid">
                    <div className="form-group grid-full">
                        <label>Full Name</label>
                        <input type="text" placeholder="John Doe" required value={buyerData.fullName} onChange={(e) => setBuyerData({ ...buyerData, fullName: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="john@example.com" required />
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="tel" placeholder="+1 (555) 000-0000" required />
                    </div>
                    <div className="form-group grid-full">
                        <label>Password</label>
                        <input type="password" placeholder="••••••••" required />
                    </div>

                    <div className="form-divider grid-full">Location</div>
                    <div className="form-group">
                        <label>State</label>
                        <input type="text" placeholder="California" />
                    </div>
                    <div className="form-group">
                        <label>City</label>
                        <input type="text" placeholder="Los Angeles" />
                    </div>
                    <div className="form-group grid-full">
                        <label>Delivery Address</label>
                        <textarea rows="2" placeholder="123 Farm Lane, Apt 4" />
                    </div>

                    <div className="form-divider grid-full">Preferences</div>
                    <div className="form-group">
                        <label>Preferred Produce</label>
                        <select>
                            <option>Vegetables</option>
                            <option>Fruits</option>
                            <option>Dairy</option>
                            <option>Meat & Poultry</option>
                            <option>Mixed</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Delivery Method</label>
                        <select>
                            <option>Home Delivery</option>
                            <option>Pickup Point</option>
                        </select>
                    </div>
                </div>

                <button className="btn hero-btn-primary full-width-btn" type="submit">Create Account</button>
            </form>
        </div>
    );

    const renderSellerForm = () => (
        <div className="form-screen animate-fade-in">
            <button className="back-btn" onClick={() => setStep(1)}>← Back to Roles</button>
            <div className="form-header">
                <div className="badge seller-badge">Seller Account</div>
                <h2 className="title">Step 1: Personal Info</h2>
                <p className="subtitle">Let's start with your contact details</p>
            </div>

            <form className="auth-form" onSubmit={(e) => { e.preventDefault(); onLogin('seller', sellerData); }}>
                <div className="form-grid">
                    <div className="form-group grid-full">
                        <label>Full Name</label>
                        <input type="text" placeholder="Jane Farmer" required value={sellerData.fullName} onChange={(e) => setSellerData({ ...sellerData, fullName: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="jane.farm@example.com" required />
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="tel" placeholder="+1 (555) 111-2222" required />
                    </div>
                    <div className="form-group grid-full">
                        <label>Password</label>
                        <input type="password" placeholder="••••••••" required />
                    </div>
                </div>

                <button className="btn hero-btn-primary full-width-btn" type="submit">Next: Farm Details →</button>
            </form>
        </div>
    );

    return (
        <div className="signup-overlay">
            <div className="container signup-container">
                <div className="signup-box">
                    {step === 1 && renderRoleSelection()}
                    {step === 2 && role === 'buyer' && renderBuyerForm()}
                    {step === 2 && role === 'seller' && renderSellerForm()}
                </div>
            </div>
        </div>
    );
};

export default Signup;
