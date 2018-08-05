import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import QuestionsList from '../QuestionsList/QuestionsList';
import Question from '../Question/Question';
import NewQuestion from '../NewQuestion/NewQuestion';
import LeaderBoard from '../LeaderBoard/LeaderBoard';
import Login from '../Login/Login';
import CreateUser from '../Login/CreateUser';
import NotFound from '../NotFound/NotFound';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import { handleInitialData } from '../../actions/shared';
import './App.css';

class App extends PureComponent {
    static defaultProps = {
        handleInitialData: () => {}
	}
	static propTypes = {
		handleInitialData: PropTypes.func
	}
    componentDidMount() {
        /* Retreiving initial information for the application */
        this.props.handleInitialData();
    }
    /* Will help to determinate the appropiate route */
    getRoute = () => {
        return (
        	<Switch>
                <PrivateRoute
                    exact
                    path='/'
					component={QuestionsList}
				/>
                <Route
                    path='/login'
                    component={Login}
				/>
                <Route
                    path='/create-user'
                    component={CreateUser}
                />
                <PrivateRoute
					path='/questions/:id'
					component={Question}
				/>
                <PrivateRoute
					path='/leaderboard'
					component={LeaderBoard}
				/>
                <PrivateRoute
                    path='/add'
                    component={NewQuestion}
                />
                <Route component={NotFound} />
            </Switch>
		);
	}
    render() {
        return (
            <BrowserRouter className='App'>
                <div className='App'>
                    <LoadingBar style={{ backgroundColor: '#76d8c7', height: '5px', zIndex: 2 }}/>
                    {this.getRoute()}
                </div>
            </BrowserRouter>
        );
    }
}

const mapDispatchToProps = { handleInitialData };

export default connect(null, mapDispatchToProps)(App);
