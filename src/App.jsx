import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import MarketplacePreview from './components/MarketplacePreview';
import Footer from './components/Footer';
import Signup from './components/Signup';
import BuyerDashboard from './components/BuyerDashboard';
import SellerDashboard from './components/SellerDashboard';
import './App.css';

function App() {
  const [showSignup, setShowSignup] = useState(false);
  const [user, setUser] = useState(null); // { loggedIn: boolean, role: 'buyer' | 'seller', data: any }

  const handleLogin = (role, data) => {
    setUser({ loggedIn: true, role, data });
    setShowSignup(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (user?.loggedIn) {
    if (user.role === 'buyer') {
      return <BuyerDashboard user={user.data} onLogout={handleLogout} />;
    } else {
      return <SellerDashboard user={user.data} onLogout={handleLogout} />;
    }
  }

  return (
    <div className="app-wrapper">
      <Navbar onJoinClick={() => setShowSignup(true)} />
      <main className="main-content">
        <Hero onJoinClick={() => setShowSignup(true)} />
        <Features />
        <Portfolio />
        <MarketplacePreview />
      </main>
      <Footer />
      {showSignup && <Signup onBack={() => setShowSignup(false)} onLogin={handleLogin} />}
    </div>
  );
}

export default App;
