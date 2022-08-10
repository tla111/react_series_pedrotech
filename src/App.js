import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [todoList, setTodoList] = useState([]);

    return (
        <div className="App">
            <div className="addTask">
                <input />
                <button>Add Task</button>
            </div>
            <div className="list"></div>
        </div>
    )
}

export default App;