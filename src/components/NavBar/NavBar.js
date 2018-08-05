import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { unsetAuthedUser } from '../../actions/authedUser';
import { resetTab } from '../../actions/nav';
import Logo from '../Logo/Logo';
import User from '../User/User';
import './NavBar.css';

const NavBar = ({ user, unsetAuthedUser, resetTab, history }) => {
    const logout = () => {
        unsetAuthedUser();
        resetTab();
        history.replace('/');
    }
    return (
        <div className='nav-bar'>
           <Logo navBar={true} />
           <div className='user-information'>
               <User user={user} /> |
               <button
                   className='logout'
                   onClick={()=> logout() }>Logout</button>
           </div>
        </div>
    )
}

NavBar.propTypes = {
    unsetAuthedUser: PropTypes.func.isRequired,
    resetTab: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
}

NavBar.defaultProps = {
    unsetAuthedUser: () => {},
    resetTab: () => {},
    history: {},
    user: {}
}

const mapDispatchToProps = { unsetAuthedUser, resetTab };

function mapStateToProps({ authedUser, users }) {
    return {
        user: (authedUser) ? users[authedUser] : ''
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
