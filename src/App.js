import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleChange = (e) => {
        setNewTask(e.target.value);
    };

    const addTask = () => {
        setTodoList([...todoList, newTask]);
    };

    const deleteTask = (taskName) => {
        const newTodoList = todoList.filter((task) => {
            if (task === taskName) {
                return false;
            } else {
                return true;
            }
        });
        setTodoList(newTodoList);
    };

    return (
        <div className="App">
            <div className="addTask">
                <input onChange={handleChange} />
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className="list">
                {todoList.map((task) => {
                    return (
                        <div>
                            <h1>{task}</h1>
                            <button onClick={() => deleteTask(task)}>X</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default App;