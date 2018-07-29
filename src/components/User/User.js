import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

const User = ({ user, showInNav }) => {
    const classInLine = (showInNav) ? 'user-nav': 'user';
    return (
            <div className={`${classInLine}`}>
                <img src={user.avatarURL}  alt={user.name} />
                {user.name}
            </div>
    )
}

User.propTypes =  {
    user: PropTypes.object.isRequired,
    showInNav: PropTypes.bool
}

User.defaultProps =  {
    user: {},
    showInNav: true
}

export default User;
