import React, { useState, useEffect } from 'react';
import './App.css';

fetch("https://catfact.ninja/fact")
    .then((res) => res.json())
    .then((data) => console.log(data));

const App = () => {
    return (
        <div className="App">
            <button>Generate Cat Fact</button>
            <p></p>
        </div>
    )
}

export default App;