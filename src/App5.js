import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Profile from './Pages/Profile';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';

const App5 = () => {
    const [username, setUsername] = useState("PedroTech");
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home username={username} />} />
                    <Route path="/profile" element={<Profile username={username} setUsername={setUsername} />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
                </Routes>
            </Router>
        </div>
    )
}

export default App5;