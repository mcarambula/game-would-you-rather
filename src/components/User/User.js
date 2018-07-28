import React from 'react';
import './User.css';

const User = ({ user = {}, showInNav = true }) => {
    const classInLine = (showInNav) ? 'user-nav': 'user';
    return (
            <div className={`${classInLine}`}>
                <img src={user.avatarURL}  alt={user.name} />
                {user.name}
            </div>
    )
}


export default User;
