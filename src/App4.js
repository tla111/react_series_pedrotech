import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';


const App = () => {
    const [catFact, setCatFact] = useState("");

    Axios.get("https://catfact.ninja/fact").then((res) => {
        setCatFact("Axios", res.data);
    })
    return (
        <div className="App">
            <button>Generate Cat Fact</button>
            <p>{catFact}</p>
        </div>
    )
}

export default App;