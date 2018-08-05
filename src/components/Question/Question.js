import React, { Component, Fragment } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { handleSaveAnswer } from '../../actions/shared';
import User from '../User/User';
import QuestionStatistics from './QuestionStatistics';
import { OPTION_ONE, OPTION_TWO, WOULD_YOU_RATHER } from '../../utils/variables';
import { getAnswerSelected } from '../../utils/general';
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
    render() {
        const { author, question, answerSelected } = this.props;
        if ( question === null ) {
            return <Redirect to='/404' />;
        }
        return (
            <div className='question'>
                <div className='question-title'>{WOULD_YOU_RATHER}</div>
                <div className='question-description'>
                    <div className='created-by'>
                        Created by:
                        <User user={author} showInNav={false} />
                    </div>
                    <div className='options'>
                        {
                        this.props.questionAnswered
                            ?
                                /* Showing the statistics of the answers */
                                <QuestionStatistics
                                        question={question}
                                        answerSelected={answerSelected} />
                            :
                                this.renderFullQuestion(question)
                        }
                     </div>
                </div>
            </div>
        )
    }
}

Question.propTypes =  {
    handleSaveAnswer: PropTypes.func.isRequired,
    activeTab: PropTypes.number.isRequired,
    answerSelected: PropTypes.string,
    author: PropTypes.object.isRequired,
    question: PropTypes.object,
    authedUser: PropTypes.string.isRequired,
    questionAnswered: PropTypes.bool
}

Question.defaultProps =  {
    handleSaveAnswer: () => {},
	activeTab: 0,
    answerSelected: '',
    author: {},
    question: {},
    authedUser: '',
    questionAnswered: false
}

const mapDispatchToProps = { handleSaveAnswer };

function mapStateToProps ({ authedUser, users, questions }, props) {
    const { id } = props.match.params;
    const question = (id && questions[id]) ? questions[id] : null;
    /* Determinate the answer selected by the user, in case the user already did */
    const answerSelected = getAnswerSelected(question, authedUser);
    const questionAnswered = (answerSelected !== null);
    return {
        authedUser,
        answerSelected,
        questionAnswered,
        question: question,
        author: question !== null ? users[question.author] : {}
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Question));
