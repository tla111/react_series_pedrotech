import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
    const [score, setScore] = useState(0)
    return (
        <div className="App">
            <h1>App</h1>
            <h2>{score}</h2>
        </div>
    )
}

export default App;