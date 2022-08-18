import React from 'react';
import { useForm } from "react-hook-form";
import './App.css'

const App6 = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = () => {
        console.log("HELLO WORLD");
    }
    return (
        <form style={{ display: "flex", flexDirection: "column", width: "50%" }} onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Full Name..." />
            <input type="text" placeholder="Email..." />
            <input type="text" placeholder="Age..." />
            <input type="password" placeholder="Password..." />
            <input type="password" placeholder="Confirm Password..." />
            <input type="submit" />
        </form>
    )
}

export default App6