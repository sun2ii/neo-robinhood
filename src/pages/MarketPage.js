// src/pages/MarketPage.js
import React, { useEffect, useState } from 'react';
import stockData from '../mockdata/stockdata.json'; // Import the JSON data
import '../style/MarketPage.css';

const MarketPage = () => {
    const [marketData, setMarketData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate fetching data
        const fetchData = () => {
            setLoading(true);
            setMarketData(stockData);
            setLoading(false);
        };

        fetchData();
    }, []);

    if (loading) {
        return <div className="loading-message">Loading...</div>;
    }

    return (
        <div className="market-data-container">
            <h1>Market Data</h1>
            <ul className="market-data">
                {marketData.map(stock => (
                    <li key={stock.symbol}>
                        <div className="stock-name">
                            {stock.name} ({stock.symbol})
                        </div>
                        <div className="stock-info">
                            <div className="stock-price">${stock.price.toFixed(2)}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MarketPage;