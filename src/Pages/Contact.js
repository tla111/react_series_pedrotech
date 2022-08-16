import React, { useContext } from 'react';
import { AppContext } from '../App5';

const Contact = () => {
    const { username } = useContext(AppContext)
    return (
        <div>
            <h1>THIS IS THE CONTACT PAGE {username}</h1>
        </div>
    )
}

export default Contact;