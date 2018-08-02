import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import QuestionsList from '../QuestionsList/QuestionsList';
import Question from '../Question/Question';
import NewQuestion from '../NewQuestion/NewQuestion';
import LeaderBoard from '../LeaderBoard/LeaderBoard';
import Login from '../Login/Login';
import NavBar from '../NavBar/NavBar';
import Menu from '../Menu/Menu';
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
    getLoggedInRoute = () => {
		return (
			<Switch>
                <Route
					path='/questions'
					component={QuestionsList}
				/>
                <Route
					path='/question/:id'
					component={Question}
				/>
                <Route
					path='/leaderboard'
					component={LeaderBoard}
				/>
                <Route
                    path='/add'
                    component={NewQuestion}
                />
                <Route component={NotFound} />
            </Switch>
		);
	}
    getNotLoggedInRoute = () => {
        return (
			<Switch>
                <Route
					path='/'
                    component={Login}
				/>
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
                        !loggedIn
                        ?
                        this.getNotLoggedInRoute()
                        :
                        <div className='Dashboard'>
                            <NavBar />
                            <div className='app-content'>
                                <Menu />
                                <div className='container'>
                                    {this.getLoggedInRoute()}
                                </div>
                            </div>
                        </div>
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
