import React from 'react';
import { withRouter } from 'react-router-dom';
import './Question.css';

const Question = ({ question, author, history }) => {
    return (
        <div className='question' onClick={() => history.push(`question/${question.id}`)}>
            <div className='author'>{author} asks: </div>
            <div className='would-you'>Would you rather...</div>
            <div className='options'>
                <div className='option option-one'>{question.optionOne.text}</div>
                <span> or &nbsp;</span>
                <div className='option option-two'>{question.optionTwo.text}</div>
             </div>
        </div>
    )
}

export default withRouter(Question);
