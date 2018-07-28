import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import User from '../User/User';
import './Question.css';

const Question = ({ question, author, history, showAll = true }) => {
    const renderFullQuestion = (question) => {
        return (
            <Fragment>
                <div className='option option-one'>{question.optionOne.text}</div>
                <span> or &nbsp;</span>
                <div className='option option-two'>{question.optionTwo.text}</div>
            </Fragment>
        )
    }
    const renderHalfQuestion = (question) => {
        return (
            <div className='option'>...{question.optionOne.text}...</div>
        )
    }
    return (
        <div className='question' onClick={() => history.push(`question/${question.id}`)}>
            <div className='question-title'>Would you rather...</div>
            <div className='question-description'>
                <div className='created-by'>
                    Created by:
                    <User user={author} showInNav={false} />
                </div>
                <div className='options'>
                    {showAll
                        ?
                        renderFullQuestion(question)
                        :
                        renderHalfQuestion(question)
                    }
                 </div>
            </div>
        </div>
    )
}

function mapStateToProps ({authedUser, users, questions}, { id }) {
    const question = questions[id];
    return {
        authedUser,
        question: question,
        author: users[question.author]|| {}
    }
}

export default withRouter(connect(mapStateToProps)(Question));
