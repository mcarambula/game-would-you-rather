import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleSaveAnswer } from '../../actions/shared';
import User from '../User/User';
import './Question.css';

const Question = ({ question, author, history, handleSaveAnswer }) => {
    const saveAnswer = (optionId, questionId) => {
        handleSaveAnswer(optionId, questionId)
    }
    const renderFullQuestion = (question) => {
        return (
            <Fragment>
                <div className='option option-one' onClick={()=> saveAnswer('optionOne', question.id)}>{question.optionOne.text}</div>
                <span className='or'> or </span>
                <div className='option option-two' onClick={()=> saveAnswer('optionTwo', question.id)}>{question.optionTwo.text}</div>
            </Fragment>
        )
    }
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
                        { renderFullQuestion(question) }
                     </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = { handleSaveAnswer };

function mapStateToProps ({authedUser, users, questions}, props) {
    const { id } = props.match.params;
    const question = (id) ? questions[id] : {};
    return {
        authedUser,
        question: question,
        author: users[question.author]|| {}
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Question));
