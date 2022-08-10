import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [todoList, setTodoList] = useState({});
    const [newTask, setNewTask] = useState("");

    const handleChange = (e) => {
        setNewTask(e.target.value);
    };

    const addTask = () => {
        const task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            taskName: newTask
        }
        setTodoList([...todoList, task]);
    };

    const deleteTask = (taskName) => {
        setTodoList(todoList.filter((task) => task !== taskName));
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