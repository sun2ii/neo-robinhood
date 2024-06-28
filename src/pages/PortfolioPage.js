// src/pages/PortfolioPage.js
import React, { useState, useEffect } from 'react';
import marketData from '../mockdata/stockdata.json'; // Import the JSON data
import '../styles/PortfolioPage.css';

const initialPortfolioData = [
    {
        id: 1,
        symbol: "AAPL",
        name: "Apple Inc.",
        shares: 10,
        price: 145.32,
        initialPrice: 145.32
    },
    {
        id: 2,
        symbol: "TSLA",
        name: "Tesla Inc.",
        shares: 5,
        price: 699.20,
        initialPrice: 699.20
    },
    {
        id: 3,
        symbol: "GOOGL",
        name: "Alphabet Inc.",
        shares: 2,
        price: 2725.60,
        initialPrice: 2725.60
    }
];

const PortfolioPage = () => {
    const [portfolio, setPortfolio] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedStock, setSelectedStock] = useState(marketData[0].symbol);
    const [shares, setShares] = useState(1);

    useEffect(() => {
        const storedPortfolio = JSON.parse(localStorage.getItem('portfolio'));
        if (storedPortfolio && storedPortfolio.length > 0) {
            setPortfolio(storedPortfolio);
        } else {
            setPortfolio(initialPortfolioData);
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        localStorage.setItem('portfolio', JSON.stringify(portfolio));
    }, [portfolio]);

    const addStock = (newStock) => {
        setPortfolio([...portfolio, newStock]);
    };

    const updateStock = (symbol, sharesChange) => {
        setPortfolio(
            portfolio.map(stock =>
                stock.symbol === symbol ? { ...stock, shares: stock.shares + sharesChange } : stock
            ).filter(stock => stock.shares > 0)
        );
    };

    const handleAddStock = () => {
        const stockData = marketData.find(stock => stock.symbol === selectedStock);
        const existingStock = portfolio.find(stock => stock.symbol === selectedStock);

        if (existingStock) {
            updateStock(selectedStock, shares);
        } else {
            const newStock = {
                id: portfolio.length + 1,
                symbol: stockData.symbol,
                name: stockData.name,
                shares: shares,
                price: stockData.price,
                initialPrice: stockData.price
            };
            addStock(newStock);
        }
    };

    const handleBuyShares = (symbol) => {
        const sharesToBuy = parseInt(prompt('Enter number of shares to buy:', '1'));
        if (sharesToBuy > 0) {
            updateStock(symbol, sharesToBuy);
        }
    };

    const handleSellShares = (symbol) => {
        const sharesToSell = parseInt(prompt('Enter number of shares to sell:', '1'));
        const stock = portfolio.find(stock => stock.symbol === symbol);
        if (sharesToSell > 0 && stock.shares >= sharesToSell) {
            updateStock(symbol, -sharesToSell);
        } else {
            alert('You cannot sell more shares than you own.');
        }
    };

    const handleRemoveStock = (id) => {
        setPortfolio(portfolio.filter(stock => stock.id !== id));
    };

    const calculateTotalValue = () => {
        return portfolio.reduce((total, stock) => total + (stock.shares * stock.price), 0).toFixed(2);
    };


    if (loading) {
        return <div className="loading-message">Loading...</div>;
    }

    return (
        <div className="portfolio-data-container">
            <h1>Your Portfolio</h1>
            <div className="portfolio-total-value">
                Total Portfolio Value: ${calculateTotalValue()}
            </div>
            <div className="add-stock-form">
                <select value={selectedStock} onChange={(e) => setSelectedStock(e.target.value)}>
                    {marketData.map(stock => (
                        <option key={stock.symbol} value={stock.symbol}>
                            {stock.name} ({stock.symbol})
                        </option>
                    ))}
                </select>
                <input
                    type="number"
                    value={shares}
                    onChange={(e) => setShares(Number(e.target.value))}
                    min="1"
                />
                <button onClick={handleAddStock}>Add Stock</button>
            </div>
            <ul className="portfolio-data">
                {portfolio.map(stock => (
                    <li key={stock.id}>
                        <div className="stock-name">
                            {stock.name} ({stock.symbol})
                        </div>
                        <div className="stock-info">
                            <div className="stock-shares">{stock.shares} shares</div>
                            <div className="stock-price">${(stock.shares * stock.price).toFixed(2)}</div>
                            <button onClick={() => handleBuyShares(stock.symbol)}>Buy Shares</button>
                            <button onClick={() => handleSellShares(stock.symbol)}>Sell Shares</button>
                            <button onClick={() => handleRemoveStock(stock.id)}>Remove</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PortfolioPage;