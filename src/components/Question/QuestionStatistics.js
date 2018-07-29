import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { OPTION_ONE, OPTION_TWO } from '../../utils/variables';

const QuestionStatistics = ({ question, answerSelected }) => {
    const votesOptionOne = question.optionOne.votes.length;
    const votesOptionTwo = question.optionTwo.votes.length;
    const totalVotes = votesOptionOne + votesOptionTwo;
    const percentageOptionOne = (votesOptionOne / totalVotes * 100).toFixed(1);
    const percentageOptionTwo = (votesOptionTwo /  totalVotes * 100).toFixed(1);
    return (
        <Fragment>
            <div
                className={`option option-one ${answerSelected === OPTION_ONE ? 'selected': 'unselected'}`}>
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
                className={`option option-two ${answerSelected === OPTION_TWO ? 'selected': 'unselected'}`} >
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

QuestionStatistics.propTypes =  {
    question: PropTypes.object.isRequired,
    answerSelected: PropTypes.string.isRequired
}

QuestionStatistics.defaultProps =  {
    question: {},
    answerSelected: ''
}

export default QuestionStatistics;
