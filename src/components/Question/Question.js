import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleSaveAnswer } from '../../actions/shared';
import User from '../User/User';
import { OPTION_ONE, OPTION_TWO } from '../../utils/variables';
import './Question.css';

class Question extends Component {
    saveAnswer = (optionId, questionId) => {
        this.props.handleSaveAnswer(optionId, questionId)
    }
    renderFullQuestion = (question) => {
        return (
            <Fragment>
                <div
                    className='option option-one selectable'
                    onClick={()=> this.saveAnswer(OPTION_ONE, question.id)}>
                        {question.optionOne.text}
                </div>
                <span className='or'> or </span>
                <div
                    className='option option-two selectable'
                    onClick={()=> this.saveAnswer(OPTION_TWO, question.id)}>
                    {question.optionTwo.text}
                </div>
            </Fragment>
        )
    }
    renderStatistics = (question) => {
        const votesOptionOne = question.optionOne.votes.length;
        const votesOptionTwo = question.optionTwo.votes.length;
        const totalVotes = votesOptionOne + votesOptionTwo;
        const percentageOptionOne = (votesOptionOne / totalVotes * 100).toFixed(1);
        const percentageOptionTwo = (votesOptionTwo /  totalVotes * 100).toFixed(1);
        const selected = this.props.selected;
        return (
            <Fragment>
                <div
                    className={`option option-one ${selected === OPTION_ONE ? 'selected': 'unselected'}`}>
                    <div className='text'>{question.optionOne.text}</div>
                    <div className='votes'>{votesOptionOne} out of {totalVotes} votes</div>
                    <div className='percetage'>
                        { percentageOptionOne > 0 &&
                            <div style={{width: `${percentageOptionOne}%`}}>{percentageOptionOne} %</div>
                        }
                    </div>
                </div>
                <span className='or'> or </span>
                <div
                    className={`option option-two ${selected === OPTION_TWO ? 'selected': 'unselected'}`} >
                    <div className='text'>{question.optionTwo.text}</div>
                    <div className='votes'>{votesOptionTwo} out of {totalVotes} votes</div>
                    <div className='percetage'>
                        { percentageOptionTwo > 0 &&
                            <div style={{width: `${percentageOptionTwo}%`}}>{percentageOptionTwo} %</div>
                        }
                    </div>
                </div>
            </Fragment>
        )
    }
    render() {
        const { author, question } = this.props;
        return (
            <div className='container'>
                <div className='question'>
                    <div className='question-title'>Would you rather...</div>
                    <div className='question-description'>
                        <div className='created-by'>
                            Created by:
                            <User user={author} showInNav={false} />
                        </div>
                        <div className='options'>
                            {
                            this.props.questionAnswered
                                ?
                                    this.renderStatistics(question)
                                :
                                    this.renderFullQuestion(question)
                            }
                         </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = { handleSaveAnswer };

function mapStateToProps ({ authedUser, users, questions }, props) {
    const { id } = props.match.params;
    const question = (id) ? questions[id] : {};
    const selected = question.optionOne.votes.includes(authedUser) ? OPTION_ONE :
                    (question.optionTwo.votes.includes(authedUser) ? OPTION_TWO : null);
    const questionAnswered = (selected !== null);
    return {
        authedUser,
        selected,
        questionAnswered,
        question: question,
        author: users[question.author]|| {}
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Question));
