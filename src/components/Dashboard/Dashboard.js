import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from '../NavBar/NavBar';
import Menu from '../Menu/Menu';
import Questions from '../Questions/Questions';
import QuestionPage from '../Question/QuestionPage';
import NewQuestion from '../NewQuestion/NewQuestion';
import LeaderBoard from '../LeaderBoard/LeaderBoard';
import { getAllQuestions } from '../../actions/questions';
import './Dashboard.css';

class Dashboard extends Component {
    getRoute = () => {
		return (
			<Switch>
				<Route
					path="/questions"
					component={Questions}
				/>
                <Route
					path="/question/:id"
					component={QuestionPage}
				/>
                <Route
					path="/leaderboard"
					component={LeaderBoard}
				/>
                <Route
                    path="/add"
                    component={NewQuestion}
                />
			</Switch>
		);
	}
    render() {
        return (
            <BrowserRouter basename='dashboard'>
                <div className='Dashboard'>
                    <NavBar />
                    <div className='app-content'>
                        <Menu />
                        { this.getRoute() }
                    </div>
                </div>
            </BrowserRouter>
        )
    }

}

const mapDispatchToProps = { getAllQuestions };

function mapStateToProps({ authedUser, questions, users }) {
    return {
        questions,
        users
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
