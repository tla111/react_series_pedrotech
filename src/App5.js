import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./Pages/Home";
import Menu from './Pages/Menu';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';

const App5 = () => {

    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
                </Routes>
            </Router>
        </div>
    )
}

export default App5;