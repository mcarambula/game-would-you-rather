import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import Login from '../Login/Login';
import Dashboard from '../Dashboard/Dashboard';

import { handleInitialData } from '../../actions/shared';
import './App.css';

class App extends Component {
    componentDidMount() {
        this.props.handleInitialData();
    }
    getRoute = (loggedIn) => {
		return (
			<Switch>
                <Route path="/" exact render={() => loggedIn ? <Dashboard /> : <Login />} />
                <Route path="/dashboard" render={() => loggedIn ? <Dashboard /> : <Login />} />
            </Switch>
		);
	};
    render() {
        const { loading, loggedIn } = this.props;
        return (
            <BrowserRouter className="App">
                <div className="App">
                    <LoadingBar style={{ backgroundColor: '#76d8c7', height: '5px' }}/>
                    {
                        loading
                        ?
                         <div>Espere</div>
                        :
                        this.getRoute(loggedIn)
                    }
                </div>
            </BrowserRouter>
        );
    }
}

const mapDispatchToProps = { handleInitialData };

function mapStateToProps({ users, authedUser }) {
    return {
        loading: users === null,
        loggedIn: authedUser !== null,
        users
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
