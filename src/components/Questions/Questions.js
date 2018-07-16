import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tabs from '../Tabs/Tabs';
import Question from '../Question/Question';

class Questions extends Component {
    state = {
        active: 0
    }
    changeTab = (id) => {
        this.setState({active: id});
    }
    renderQuestions = (filter) => {
        const { questions } = this.props;
        const q = (filter === 'unanswered') ? this.props.unaswered : this.props.answered;
        return (
            q.map(id => (
                <Question
                    optionOne={questions[id].optionOne.text}
                    optionTwo={questions[id].optionTwo.text} />
            ))
        )
    }
    render() {
        return (
            <div className='Questions'>
               <Tabs changeTab={this.changeTab} active={this.state.active}/>
               <div>
                  { (this.state.active === 0) && this.renderQuestions('unanswered')}
                  { (this.state.active === 1) && this.renderQuestions('answered')}
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
        answered: answered || [],
        unaswered: unaswered || [],
        questions
    }
}


export default connect(mapStateToProps)(Questions);
