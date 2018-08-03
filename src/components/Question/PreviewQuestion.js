import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import User from '../User/User';
import { WOULD_YOU_RATHER } from '../../utils/variables';
import './Question.css';

const PreviewQuestion = ({ question, author, history }) => {
    return (
        <div className='question' onClick={() => history.push(`questions/${question.id}`)}>
            <div className='question-title'>{WOULD_YOU_RATHER}</div>
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

PreviewQuestion.propTypes = {
    question: PropTypes.object.isRequired,
    author: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
}

PreviewQuestion.defaultProps = {
    question: {},
    author : {},
    history: {}
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
