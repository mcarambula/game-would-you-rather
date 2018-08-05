import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { handleAddQuestion } from '../../actions/shared';
import { connect } from 'react-redux';
import { OPTION_ONE, OPTION_TWO, WOULD_YOU_RATHER } from '../../utils/variables';
import './NewQuestion.css';

class NewQuestion extends Component {
    state = {
        [OPTION_ONE] : '',
        [OPTION_TWO] : ''
    }
    static defaultProps = {
        handleAddQuestion: () => {},
		history: {}
	}
	static propTypes = {
		handleAddQuestion: PropTypes.func.isRequired,
		history: PropTypes.object.isRequired
	}
    handleOptionChange = ( e, option ) => {
        e.preventDefault();
        //Setting the value of the respective input
        this.setState({
            [ option ] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const optionOne = this.state[OPTION_ONE];
        const optionTwo = this.state[OPTION_TWO];
        this.props
            .handleAddQuestion(optionOne, optionTwo)
            .then(() => this.props.history.push('questions'));
    }
    render() {
        const { optionOne, optionTwo } = this.state;
        return (
            <div className='create-question'>
                <h3 className='question-title'>{WOULD_YOU_RATHER}</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className='options'>
                        <input
                            name='optionOne'
                            type='text'
                            value={optionOne}
                            placeholder='Option one'
                            autoComplete='off'
                            onChange={(e) => this.handleOptionChange(e, OPTION_ONE)}
                         />
                         <span className='or'>OR</span>
                          <input
                             name='optionTwo'
                             type='text'
                             value={optionTwo}
                             placeholder='Option two'
                             autoComplete='off'
                             onChange={(e) => this.handleOptionChange(e, OPTION_TWO)}
                          />
                     </div>
                     <button className='button' disabled={optionOne === '' || optionTwo === ''}>Submit</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = { handleAddQuestion };

export default withRouter(connect(null, mapDispatchToProps)(NewQuestion));
