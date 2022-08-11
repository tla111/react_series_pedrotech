import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [showText, setShowText] = useState(false);

    return (
        <div className="App">
            <button onClick={() => setShowText(!showText)}>
                Show Text
            </button>

            {showText && <Text />}
        </div>
    )
}

const Text = () => {
    return (
        <div>
            <h1>Text</h1>
        </div>
    )
}

export default App;

/* 
Stages of Lifecycle:
    Mounting - Component Appearing on Screen
    Updating - Component Changing (UI, State, Prop)
    Unmounting - Component Stop Appearing on Screen
*/