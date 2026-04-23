import React from 'react';
import tomatoesImg from '../assets/images/tomatoes.jpg';
import carrotsImg from '../assets/images/carrots.png';
import applesImg from '../assets/images/apples.png';
import spinachImg from '../assets/images/spinach.png';
import './MarketplacePreview.css';

const MarketplacePreview = () => {
    const products = [
        { id: 1, name: 'Organic Tomatoes', price: '$2.99/lb', farmer: 'Green Valley Farm', img: tomatoesImg },
        { id: 2, name: 'Fresh Carrots', price: '$1.49/lb', farmer: 'Sunrise Agrics', img: carrotsImg },
        { id: 3, name: 'Crisp Apples', price: '$3.50/lb', farmer: 'Orchard View', img: applesImg },
        { id: 4, name: 'Leafy Spinach', price: '$2.00/lb', farmer: 'Nature\'s Best', img: spinachImg }
    ];

    return (
        <section id="market" className="marketplace">
            <div className="container">
                <div className="marketplace-header">
                    <h2 className="title">Fresh From <span className="text-accent">The Fields</span></h2>
                    <p className="subtitle">Discover peak season produce sourced directly from farmers near you.</p>
                </div>

                <div className="product-grid">
                    {products.map(product => (
                        <div className="product-card" key={product.id}>
                            <div className="product-img-wrapper">
                                <img src={product.img} alt={product.name} className="product-img" />
                            </div>
                            <div className="product-info">
                                <h3 className="product-name">{product.name}</h3>
                                <p className="product-farmer">By {product.farmer}</p>
                                <div className="product-bottom">
                                    <span className="product-price">{product.price}</span>
                                    <button className="btn btn-primary add-btn">+</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="marketplace-footer">
                    <button className="btn btn-outline-dark">Login to View Full Market</button>
                </div>
            </div>
        </section>
    );
};

export default MarketplacePreview;
