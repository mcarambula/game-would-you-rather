import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Tabs from '../Tabs/Tabs';
import PreviewQuestion from '../Question/PreviewQuestion';
import { ANSWERED, UNASWERED } from '../../utils/variables';
import * as QUESTIONS_UTILS from '../../utils/general';
import { changeTab } from '../../actions/nav';
import './QuestionsList.css';

const QuestionsList  = (props) => {
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
            return <div className='no-question'> You haven&apos;t answered a question yet. </div>
        }
        return questionToShow.map(id => <PreviewQuestion key={id} id={id} />);
    }

    const { activeTab } = props;
    return (
        <div className='questions'>
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

QuestionsList.propTypes =  {
    changeTab: PropTypes.func.isRequired,
	activeTab: PropTypes.number.isRequired,
    authedUser: PropTypes.string.isRequired
}

QuestionsList.defaultProps =  {
    changeTab: () => {},
	activeTab: 0,
    authedUser: ''
}

const mapDispatchToProps =  { changeTab };

function mapStateToProps({ users, questions, authedUser, activeTab }) {
    const user = authedUser;
    const answered = QUESTIONS_UTILS.getAnsweredQuestions(questions, user);
    const unaswered = QUESTIONS_UTILS.getUnansweredQuestions(questions, user);
    return {
        users,
        activeTab,
        [ANSWERED]: answered || [],
        [UNASWERED]: unaswered || []
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsList);
