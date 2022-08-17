import React, { useState, createContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Profile from './Pages/Profile';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const AppContext = createContext();

const App5 = () => {
    const client = new QueryClient();

    const [username, setUsername] = useState("PedroTech");
    return (
        <div className="App">
            <QueryClientProvider client={client}>
                <AppContext.Provider value={{ username, setUsername }}>
                    <Router>
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
                        </Routes>
                    </Router>
                </AppContext.Provider>
            </QueryClientProvider>
        </div>
    )
}

export default App5;