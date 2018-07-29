import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import User from '../User/User';
import './Question.css';

const PreviewQuestion = ({ question, author, history }) => {
    return (
        <div className='question' onClick={() => history.push(`question/${question.id}`)}>
            <div className='question-title'>Would you rather...</div>
            <div className='question-description'>
                <div className='created-by'>
                    Created by:
                    <User user={author} showInNav={false} />
                </div>
                <div className='options'>
                    <div>...{question.optionOne.text}...</div>
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

export default withRouter(connect(mapStateToProps)(PreviewQuestion));
