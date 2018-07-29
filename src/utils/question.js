const sortQuestions = (filteredQuestions, questions) => {
    return filteredQuestions.sort(( a, b ) => questions[b].timestamp - questions[a].timestamp)
}

export const getAnsweredQuestions = (questions, user) => {
    let answered = Object.keys(questions)
                    .filter(id  => questions[id].optionOne.votes.includes(user) || questions[id].optionTwo.votes.includes(user));
    answered = sortQuestions(answered, questions);
    return answered;
}

export const getUnansweredQuestions = (questions, user) => {
    let unaswered = Object.keys(questions).filter(id  => !questions[id].optionOne.votes.includes(user) && !questions[id].optionTwo.votes.includes(user));
    unaswered = sortQuestions(unaswered, questions);
    return unaswered;
}
