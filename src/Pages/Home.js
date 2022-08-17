import React, { useContext } from 'react';
import { AppContext } from '../App5';
import Axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const Home = () => {
    const { username } = useContext(AppContext);
    const { data } = useQuery(["cat"], () => {
        return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    });

    return (
        <div>
            <h1>THIS IS THE HOMEPAGE & user is: {username}</h1>
            <p>{data.fact}</p>
        </div>
    )
}

export default Home;