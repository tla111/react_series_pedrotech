import React, { useState } from 'react';

const ChangeProfile = () => {
    const [newUsername, setNewUsername] = useState("");
    return (
        <div>
            {""}
            <input onChange={(e) => setNewUsername(e.target.value)} />
            {/* <button onClick={ }>Change Username</button> */}
        </div>
    )

}

export default ChangeProfile