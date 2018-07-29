import React from 'react';
import { connect } from 'react-redux';
import Tabs from '../Tabs/Tabs';
import PreviewQuestion from '../Question/PreviewQuestion';
import { ANSWERED, UNASWERED } from '../../utils/variables';
import { changeTab } from '../../actions/nav';
import './QuestionsList.css';

const Questions  = (props) => {
    const changeTab = (id) => {
        props.changeTab(id);
    }
    /* This function renders the questions depending the selected tab */
    const renderQuestions = (filter = UNASWERED) => {
        const questionToShow = props[filter];
        if (questionToShow.length === 0 && filter === UNASWERED) {
            return <div className='no-question'> You have answered all the questions. </div>
        }
        else if (questionToShow.length === 0 && filter === ANSWERED) {
            return <div className='no-question'> You haven't answered a question yet. </div>
        }
        return questionToShow.map(id => <PreviewQuestion key={id} id={id} />);
    }

    const { activeTab } = props;
    return (
        <div className='Questions'>
            <div>
                <Tabs
                    options={['Unaswered', 'Answered']}
                    changeTab={changeTab}
                    active={activeTab} />
                { (activeTab === 0) && renderQuestions(UNASWERED)}
                { (activeTab === 1) && renderQuestions(ANSWERED)}
            </div>
        </div>
    )
}

const mapDispatchToProps =  { changeTab };

function mapStateToProps({ users, questions, authedUser, activeTab }) {
    const user = authedUser;
    let answered = Object.keys(questions).filter(id  => questions[id].optionOne.votes.includes(user) || questions[id].optionTwo.votes.includes(user));
    answered = answered.sort(( a, b ) => questions[b].timestamp - questions[a].timestamp);
    let unaswered = Object.keys(questions).filter(id  => !questions[id].optionOne.votes.includes(user) && !questions[id].optionTwo.votes.includes(user));
    unaswered = unaswered.sort(( a, b ) => questions[b].timestamp - questions[a].timestamp);
    return {
        users,
        activeTab,
        [ANSWERED]: answered || [],
        [UNASWERED]: unaswered || []
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
