import React from 'react';
import { OPTION_ONE, OPTION_TWO } from './variables';

/* Function to sort the questions by timestamp */
const sortQuestions = (filteredQuestions, questions) => {
    return filteredQuestions.sort(( a, b ) => questions[b].timestamp - questions[a].timestamp);
}

/* Function to sort the position on the users on the leaderboard */
const sortPosition = (array) => {
    return array.sort((a, b) =>  b.created + b.answered - (a.created + a.answered));
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
    const unaswered = Object.keys(questions).filter(id  => !questions[id].optionOne.votes.includes(user) && !questions[id].optionTwo.votes.includes(user));
    return sortQuestions(unaswered, questions);
}

/* This function verifies if the user has answered a question, and if so, it will return which option he chose */
export const getAnswerSelected = (question, user) => {
    if ( question !== null && question[OPTION_ONE].votes.includes(user))
        return OPTION_ONE;
    else if (question !== null && question[OPTION_TWO].votes.includes(user)) {
        return OPTION_TWO;
    }
    return null;
}

/* This function iterates through all the users to check their position */
export const getLeaderBoard = (users) => {
    const positions = Object.keys(users).map(id => ({
        id,
        created : (users[id].questions) ? users[id].questions.length : 0,
        answered: (users[id].answers) ? Object.keys(users[id].answers).length : 0
    }))
    return sortPosition(positions);
}

/* This function returns a capitalize string (used on the user creation method) */
export const capitalize = (string) => {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

/* This function returns a decoration div used on the login page */
export const getColorLines = () => {
    return (
        <div className='line-colors'>
            <div className='div-1' />
            <div className='div-2' />
            <div className='div-3' />
            <div className='div-4' />
        </div>
    );
}
