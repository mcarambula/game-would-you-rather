import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import Login from '../Login/Login';
import Dashboard from '../Dashboard/Dashboard';

import { getAllUsers } from '../../actions/users';
import './App.css';

class App extends Component {
    componentDidMount() {
        this.props.getAllUsers();
    }
    getRoute = () => {
		return (
			<Switch>
				<Route
					exact
					path="/"
					component={Login}
				/>
                <Route
					path="/dashboard"
					component={Dashboard}
				/>
			</Switch>
		);
	};
    render() {
        const { loading } = this.props;
        return (
            <BrowserRouter className="App">
                <div className="App">
                    <LoadingBar style={{ backgroundColor: '#76d8c7', height: '5px' }}/>
                    {
                        loading 
                        ?
                         <div>Espere</div>
                        :   
                        this.getRoute()
                    }
                </div>
            </BrowserRouter>
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
