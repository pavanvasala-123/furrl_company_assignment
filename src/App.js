import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Filters from './components/Filters/Filters';
import ProductGrid from './components/ProductGrid/ProductGrid';
import ProductDetails from './components/ProductsDetals/ProductDetails';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <Banner />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/product/:id" element={<ProductDetails />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

const Home = () => (
    <>
        <h2>Shop Products</h2>
        <Filters />
        <ProductGrid />
    </>
);

export default App;
