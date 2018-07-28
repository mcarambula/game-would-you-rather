import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tabs from '../Tabs/Tabs';
import Question from '../Question/Question';
import './Questions.css';

const ANSWERED = 'answered';
const UNASWERED = 'unanswered';

class Questions extends Component {
    state = {
        active: 0
    }
    /* Change the selected tab */
    changeTab = (id) => {
        this.setState({ active: id });
    }
    /* This function renders the questions depending the selected tab */
    renderQuestions = (filter = UNASWERED) => {
        const questionToShow = this.props[filter];
        return questionToShow.map(id => <Question showAll={false} key={id} id={id}/>);
    }
    render() {
        const { active } = this.state;
        return (
            <div className='Questions'>
                <div>
                    <Tabs
                        options={['Unaswered', 'Answered']}
                        changeTab={this.changeTab}
                        active={this.state.active} />
                    { (active === 0) && this.renderQuestions(UNASWERED)}
                    { (active === 1) && this.renderQuestions(ANSWERED)}
                </div>
            </div>
        )
    }
}

function mapStateToProps({ users, questions, authedUser }) {
    const user = authedUser;
    const answered = Object.keys(questions).filter(id  => questions[id].optionOne.votes.includes(user) || questions[id].optionTwo.votes.includes(user));
    const unaswered = Object.keys(questions).filter(id  => !questions[id].optionOne.votes.includes(user) && !questions[id].optionTwo.votes.includes(user));
    return {
        users,
        [ANSWERED]: answered || [],
        [UNASWERED]: unaswered || []
    }
}

export default connect(mapStateToProps)(Questions);
