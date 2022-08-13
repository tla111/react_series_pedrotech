import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';


const App = () => {
    const [age, setAge] = useState("")

    const fetchData = () => {
        Axios.get("https://api.agify.io/?name=pedro")
            .then((res) => setAge(res.data.age));
    }

    return (
        <div className="App">
            <input placeholder="Ex. Pedro..." />
            <button onClick={fetchData}>Predict Age</button>

            <h1>Predicted Age: {age}</h1>
        </div>
    )
}

export default App;