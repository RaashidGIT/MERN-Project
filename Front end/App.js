// src/App.js
import React from 'react';

import ProductList from './component/productList';
import BasicExample from './component/navbar';
import AddPage from './component/addpage';
import Footer from './component/footer';
import Details from './component/details'
import SignIn from './component/signin';
import LogIn from './component/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './App.css'; // Import default CSS

function App() {
    return (
        <Router> {/* Wrap the app in Router for routing functionality */}
            <div className="app">
                <BasicExample />
                <div className="container mt-5">
                    <div className="row">
                        <Routes>
                            <Route path="/" element={<ProductList />} />
                            <Route path="/checkout/:id" element={<Details />} />
                            <Route path="/add" element={<AddPage />} />
                            <Route path="/signin" element={<SignIn />} />
                            <Route path="/login" element={<LogIn />} />
                        </Routes>
                    </div>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
