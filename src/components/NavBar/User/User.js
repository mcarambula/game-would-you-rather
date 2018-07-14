import React from 'react';
import './User.css';

const User = ({ user = {} }) => {
    return (
        <div className='user'>
            {user.name}
            <img src={user.avatarURL} />
        </div>
    )
}


export default User;
