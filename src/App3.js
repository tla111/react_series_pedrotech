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
    const [text, setText] = useState("");

    return (
        <div>
            <input onChange={(e) => setText(e.target.value)} />

            <h1>{text}</h1>
        </div>
    )
}

export default App;

/* 
Stages of Lifecycle:
    Mounting - Component Appearing on Screen (Existing)
    Updating - Component Changing (UI, State, Prop)
    Unmounting - Component Stop Appearing on Screen (Not Existing)
*/