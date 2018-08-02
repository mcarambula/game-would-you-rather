import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

const NewUser = ({ user, showInNav }) => {
    return (
        form onSubmit={this.handleSubmit}>
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

NewUser.propTypes =  {
    user: PropTypes.object.isRequired,
    showInNav: PropTypes.bool
}

NewUser.defaultProps =  {
    user: {},
    showInNav: true
}

export default NewUser;
