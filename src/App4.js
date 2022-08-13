import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
    const [score, setScore] = useState(0)

    const increaseScore = () => {
        setScore(score + 1);
    }
    return (
        <div className="App">
            <h1>App</h1>
            <h2>{score}</h2>
            <button onClick={increaseScore}>Add Goal</button>
        </div>
    )
}

export default App;