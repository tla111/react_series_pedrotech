import React, { useContext } from 'react';
import { AppContext } from '../App5';

const ChangeProfile = () => {
    const { username, setUsername } = useContext(AppContext);

    return (
        <div>
            {""}
            <input onChange={(e) => setUsername(e.target.value)} />
            <button onClick={() => setUsername(username)}>Change Username</button>
        </div>
    )

}

export default ChangeProfile