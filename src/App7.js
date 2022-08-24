import React from 'react';
import './App.css';
import { useToggle } from './Components/useToggle';

const App7 = () => {
    const [isVisible, toggle] = useToggle()

    return (
        <div className="App">
            <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
            {isVisible && <h1>Hidden Text</h1>}
        </div>
    )
}

export default App7;