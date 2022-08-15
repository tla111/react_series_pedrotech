import React from 'react';
import './App.css';
import Axios from 'axios';

const App5 = () => {
    Axios.get("https://api.agify.io/?name=Tim").then((res) => console.log(res.data));
    return (
        <div className="App">
            <h1>App5</h1>
        </div>
    )
}

export default App5;