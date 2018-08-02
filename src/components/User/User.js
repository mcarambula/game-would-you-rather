import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

const User = ({ user, showInNav }) => {
    const classInLine = (showInNav) ? 'user-nav': 'user';
    return (
            <form onSubmit={this.handleSubmit}>
            <div className='options'>
                <input
                    name='name'
                    type='text'
                    value={optionOne}
                    placeholder='Name'
                    onChange={(e) => this.handleOptionChange(e, OPTION_ONE)}
                />
            </div>
        <button className='button'>Create</button>
        </form>
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
