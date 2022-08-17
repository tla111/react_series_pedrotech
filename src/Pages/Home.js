import React, { useContext } from 'react';
import { AppContext } from '../App5';
import Axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const Home = () => {
    const { username } = useContext(AppContext);
    const { data: catData, isLoading, isError, refetch } = useQuery(["cat"], () => {
        return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    });

    // if (isError) {
    //     return <h1>...Error</h1>
    // }

    return (
        <div>
            <h1>THIS IS THE HOMEPAGE & user is: {username}</h1>
            <p>{catData?.fact}</p>
            <button onClick={refetch}>Refresh</button>
        </div>
    )
}

export default Home;