import React from 'react';
import './User.css';

const User = ({ user = {} }) => {
    return (
        <div className='user'>
            {user.name}
            <img src={user.avatarURL}  alt={user.name} />
        </div>
    )
}


export default User;
