import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';


const App = () => {
    const [name, setName] = useState("");
    const [predictedAge, setPredictedAge] = useState(0);

    const fetchData = () => {
        Axios.get(`https://api.agify.io/?name=${name}`)
            .then((res) => setPredictedAge(res.data.age));
    }

    return (
        <div className="App">
            <input placeholder="Ex. Pedro..." onChange={(e) => setName(e.target.value)} />
            <button onClick={fetchData}>Predict Age</button>

            <h1>Predicted Age: {predictedAge}</h1>
        </div>
    )
}

export default App;