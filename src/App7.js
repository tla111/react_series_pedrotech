import React from 'react';
import './App.css';
import { useToggle } from './Components/useToggle';

const App7 = () => {
    const [isVisible, toggle] = useToggle();
    const [isVisible2, toggle2] = useToggle();

    return (
        <div className="App">
            <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
            {isVisible && <h1>Hidden Text</h1>}

            <button onClick={toggle2}>{isVisible2 ? "Hide" : "Show"}</button>
            {isVisible2 && <h1>Hidden Text 2</h1>}
        </div>
    )
}

export default App7;