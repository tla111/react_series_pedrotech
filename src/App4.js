import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';


const App = () => {
    const [catFact, setCatFact] = useState("");

    useEffect(() => {
        Axios.get("https://catfact.ninja/fact").then((res) => {
            setCatFact(res.data.fact);
        })
    }, []);

    return (
        <div className="App">
            <button>Generate Cat Fact</button>
            <p>{catFact}</p>
        </div>
    )
}

export default App;