import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logo from '../Logo/Logo';
import User from '../User/User';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div className='nav-bar'>
               <Logo navBar={true} />
               <User user={this.props.user} />
            </div>
        )
    }

}

function mapStateToProps({ authedUser, users }) {
    return {
        user: (authedUser) ? users[authedUser] : ''
    }
}


export default connect(mapStateToProps)(NavBar);
