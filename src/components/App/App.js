import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import Login from '../Login/Login';
import Game from '../Game/Game';
import NotFound from '../NotFound/NotFound';
import { handleInitialData } from '../../actions/shared';
import './App.css';

class App extends Component {
    static defaultProps = {
        handleInitialData: () => {},
		loggedIn: false
	}
	static propTypes = {
		handleInitialData: PropTypes.func,
		loggedIn: PropTypes.bool
	}
    componentDidMount() {
        /* Retreiving initial information for the application */
        this.props.handleInitialData();
    }
    /* Will help to determinate the appropiate route */
    getRoute = (loggedIn) => {
		return (
			<Switch>
                <Route path='/' exact render={() => loggedIn ? <Game /> : <Login />} />
                <Route path='/game' render={() => loggedIn ? <Game /> : <Login />} />
                <Route component={NotFound} />
            </Switch>
		);
	}
    render() {
        const { loggedIn } = this.props;
        return (
            <BrowserRouter className='App'>
                <div className='App'>
                    <LoadingBar style={{ backgroundColor: '#76d8c7', height: '5px', zIndex: 2 }}/>
                    {
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
        loggedIn: authedUser !== null,
        users
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
