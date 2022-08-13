import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';


const App = () => {

    return (
        <div className="App">
            <input placeholder="Ex. Pedro..." />
            <button>Predict Age</button>
        </div>
    )
}

export default App;