import React, { useContext } from 'react';
import { AppContext } from '../App5';
import ChangeProfile from '../Components/ChangeProfile';

const Profile = () => {
    const { username, setUsername } = useContext(AppContext);

    return (
        <div>
            <h1>PROFILE, user is: {username}</h1>
            <ChangeProfile setUsername={setUsername} />
        </div>
    )
}

export default Profile