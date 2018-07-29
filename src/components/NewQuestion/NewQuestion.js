import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { handleAddQuestion } from '../../actions/shared';
import { connect } from 'react-redux';
import './NewQuestion.css';

class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: ''
    }
    handleOptionChange = ( e, option ) => {
        e.preventDefault();
        this.setState({
            [ option ] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { optionOne, optionTwo } = this.state;
        this.props
            .handleAddQuestion(optionOne, optionTwo)
            .then(() => this.props.history.push('questions'));
    }
    render() {
        const { optionOne, optionTwo } = this.state;
        return (
            <div className='create-question'>
                <h3 className='question-title'>Would You Rather...</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className='options'>
                        <input
                            name='optionOne'
                            type='text'
                            value={optionOne}
                            placeholder='Option one'
                            onChange={(e) => this.handleOptionChange(e, 'optionOne')}
                         />
                         <span className='or'>OR</span>
                          <input
                             name='optionTwo'
                             type='text'
                             value={optionTwo}
                             placeholder='Option two'
                             onChange={(e) => this.handleOptionChange(e, 'optionTwo')}
                          />
                     </div>
                  <button className='button' disabled={optionOne === '' || optionTwo === ''}>Submit</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = { handleAddQuestion };

function mapStateToProps({ users }) {
    return {
        users
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewQuestion));
