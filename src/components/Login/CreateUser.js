import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { capitalize }from '../../utils/general';
import { handleCreateUser } from '../../actions/shared';
import Top from './Top';
import './Login.css';

class NewUser extends Component {
    state = {
        firstname : '',
        lastname: ''
    }
    static defaultProps = {
        handleCreateUser: () => {},
		history: {}
	}
	static propTypes = {
		handleCreateUser: PropTypes.func.isRequired,
		history: PropTypes.object.isRequired
	}
    handleSubmit = (e) => {
        e.preventDefault();
        const { firstname, lastname } = this.state;
        this.props
            .handleCreateUser(capitalize(firstname), capitalize(lastname))
            .then(() => this.props.history.push('/'));
    }
    render() {
        const { firstname, lastname } = this.state;
        return (
            <div className='Login'>
                <form className='login-box' onSubmit={this.handleSubmit}>
                    <Top title='Create User'/>
                    <div className='inner-box'>
                        <div>
                            <input
                                value={firstname}
                                className='text-input'
                                type='name'
                                placeholder='First Name'
                                onChange={ e => this.setState({firstname: e.target.value}) }
                            />
                        </div>
                        <div>
                            <input
                                value={lastname}
                                className='text-input'
                                type='name'
                                placeholder='Last Name'
                                onChange={ e => this.setState({lastname: e.target.value}) }
                            />
                        </div>
                        <button
                            className='button'
                            disabled={firstname !== '' && lastname !== '' ? false : true}>CREATE</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = { handleCreateUser };

export default withRouter(connect(null, mapDispatchToProps)(NewUser));
