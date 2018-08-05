import React, { Component, Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setUser } from '../../actions/authedUser';
import Top from './Top';
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
    /*
        This function handles the submission of the form.
        - Set the user selected on the login box.
        - Will redirect the app.
            - If there's a pathname on the url, the app will be redirected to there.
            - If not, the questions page will be shown
    */
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.setUser(this.state.user);
        const goTo = (this.props.location.state) ? this.props.location.state.from : '/';
        return this.props.history.push(goTo);
    }
    render() {
        const { users, loading } = this.props;
        const userArray = users ? Object.keys(users) : [];
        return (
            <div className='Login'>
                <form className='login-box' onSubmit={this.handleSubmit}>
                    <Top />
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
                        <Link className='create-user' to='/create-user'>Create a new user</Link>
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
