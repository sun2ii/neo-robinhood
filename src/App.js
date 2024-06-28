// // src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';

import HomePage from './pages/HomePage';
import MarketPage from './pages/MarketPage';
import PortfolioPage from './pages/PortfolioPage';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/market" element={<MarketPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                {/* Add other routes here */}
            </Routes>
        </Router>
    );
};

export default App;
