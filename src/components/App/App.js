import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import Login from '../Login/Login';
import { getAllUsers } from '../../actions/users';
import './App.css';

class App extends Component {
    componentDidMount() {
        this.props.getAllUsers();
    }
    render() {
        return (
            <div className="App">
                <LoadingBar style={{ backgroundColor: '#76d8c7', height: '5px' }}/>
                <Login />
            </div>
        );
    }
}

const mapDispatchToProps = { getAllUsers };

function mapStateToProps({ users }) {
    return {
        loading: users === null,
        users
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
