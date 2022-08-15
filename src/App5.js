import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';

const App5 = () => {
    const [nameData, setNameData] = useState({});

    useEffect(() => {
        Axios.get("https://api.agify.io/?name=Tim").then((res) => setNameData(res.data));
    }, [])


    return (
        <div className="App">
            <h1>App5</h1>
            {nameData.name} {nameData.age}
        </div>
    )
}

export default App5;