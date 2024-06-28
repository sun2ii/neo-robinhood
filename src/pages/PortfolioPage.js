// src/pages/PortfolioPage.js
import React, { useState, useEffect } from 'react';
import portfolioData from '../mockdata/portfoliodata.json'; // Import the JSON data (you can create this file with portfolio data)
import '../style/PortfolioPage.css'; 

const PortfolioPage = () => {
    const [portfolio, setPortfolio] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate fetching data
        const fetchData = () => {
            setLoading(true);
            setPortfolio(portfolioData);
            setLoading(false);
        };

        fetchData();
    }, []);

    if (loading) {
        return <div className="loading-message">Loading...</div>;
    }

    return (
        <div className="portfolio-data-container">
            <h1>Your Portfolio</h1>
            <ul className="portfolio-data">
                {portfolio.map(stock => (
                    <li key={stock.symbol}>
                        <div className="stock-name">
                            {stock.name} ({stock.symbol})
                        </div>
                        <div className="stock-info">
                            <div className="stock-shares">{stock.shares} shares</div>
                            <div className="stock-price">
                                ${ (stock.shares * stock.price).toFixed(2) } {/* Aggregate price */}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PortfolioPage;