import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from '../Logo/Logo';
import { setUser } from '../../actions/authedUser';
import './Login.css';

class Login extends Component {
    state = {
        user: ''
    }
    static defaultProps = {
        setUser: () => {},
		history: {},
        users: {},
        loading: false,
        pathname: ''
	}
	static propTypes = {
		setUser: PropTypes.func,
		history: PropTypes.object,
        users: PropTypes.object,
        loading: PropTypes.bool,
        pathname: PropTypes.string
	}
    renderUsers(userArray, users) {
        return (
            <Fragment>
                <option value=''>Who are you?</option>
                {
                    userArray.map( id => (
                        <option key={id} value={id}>
                            {users[id].name}
                        </option>
                    ))
                }
            </Fragment>
        )
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.setUser(this.state.user);
        const goTo = (this.props.pathname && this.props.pathname !== '/') ? this.props.pathname : '/questions';
        this.props.history.push(goTo);
    }
    render() {
        const { users, loading } = this.props;
        const userArray = users ? Object.keys(users) : [];
        return (
            <div className='Login'>
                <form className='login-box' onSubmit={this.handleSubmit}>
                    <div className='sign-in'>
                        <div className='line-colors'>
                            <div className='div-1' />
                            <div className='div-2' />
                            <div className='div-3' />
                            <div className='div-4' />
                        </div>
                        Sign In
                    </div>
                    <Logo />
                    <div className='inner-box'>
                        <select value={this.state.user} onChange={(e)=> this.setState({user: e.target.value})}>
                        {
                            (!loading)
                                ?
                                this.renderUsers(userArray, users)
                                :
                                <option>Loading... </option>
                        }
                        </select>
                        <button className='button' disabled={this.state.user !== '' ? false: true}>SUBMIT</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = { setUser };

function mapStateToProps({ users }, props) {
    return {
        loading: users === null,
        users,
        pathname: props.location.pathname || ''
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
