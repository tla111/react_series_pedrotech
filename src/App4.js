import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';

fetch("https://catfact.ninja/fact")
    .then((res) => res.json())
    .then((data) => console.log(data));

Axios.get("https://catfact.ninja/fact").then((res) => { console.log("Axios", res.data); })

const App = () => {
    return (
        <div className="App">
            <button>Generate Cat Fact</button>
            <p></p>
        </div>
    )
}

export default App;