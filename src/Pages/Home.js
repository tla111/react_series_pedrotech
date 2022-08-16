import React, { useContext } from 'react';
import { AppContext } from '../App5';

const Home = () => {
    const { username } = useContext(AppContext);

    return (
        <div>
            <h1>THIS IS THE HOMEPAGE & user is: {username}</h1>
        </div>
    )
}

export default Home;