import React from 'react';
import './Question.css';

const Question = ({optionOne, optionTwo}) => {
    return (
        <div className='question'>
            <div className='would-you'>Would you rather...</div>
            <div className='options'>
                <div className='option option-one'>{optionOne}</div>
                <div className='option option-two'>{optionTwo}</div>
             </div>
        </div>
    )
}

export default Question;
