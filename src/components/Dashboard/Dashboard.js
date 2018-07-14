import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';
import './Dashboard.css';

class Dashboard extends Component {
    render() {
        console.log(this.props);
        return (
            <div className='Dashboard'>
               <NavBar />
            </div>
        )
    }

}

function mapStateToProps({ users }) {
    return {
        users
    }
}


export default connect(mapStateToProps)(Dashboard);
