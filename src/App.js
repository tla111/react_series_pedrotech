import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState("");

    return (
        <div className="App">
            <div className="addTask">
                {/* <input onChange={ } /> */}
                <button>Add Task</button>
            </div>
            <div className="list"></div>
        </div>
    )
}

export default App;