import React from 'react';

import { OPTION_ONE, OPTION_TWO } from './variables';

const sortQuestions = (filteredQuestions, questions) => {
    return filteredQuestions.sort(( a, b ) => questions[b].timestamp - questions[a].timestamp)
}

/* This function helps to get all the questions that are answered by the user */
export const getAnsweredQuestions = (questions, user) => {
    let answered = Object.keys(questions)
                    .filter(id  => questions[id].optionOne.votes.includes(user) || questions[id].optionTwo.votes.includes(user));
    answered = sortQuestions(answered, questions);
    return answered;
}

/* This function helps to get all the questions that haven't been answered bye the user */
export const getUnansweredQuestions = (questions, user) => {
    let unaswered = Object.keys(questions).filter(id  => !questions[id].optionOne.votes.includes(user) && !questions[id].optionTwo.votes.includes(user));
    unaswered = sortQuestions(unaswered, questions);
    return unaswered;
}

export const getAnswerSelected = (question, user) => {
    if (question[OPTION_ONE].votes.includes(user))
        return OPTION_ONE;
    else if (question[OPTION_TWO].votes.includes(user)) {
        return OPTION_TWO;
    }
    return null;
}

export const capitalize = (string) => {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

export const getColorLines = () => {
    return (
        <div className='line-colors'>
            <div className='div-1' />
            <div className='div-2' />
            <div className='div-3' />
            <div className='div-4' />
        </div>
    )
}
