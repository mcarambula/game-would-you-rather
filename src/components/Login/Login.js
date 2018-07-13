import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Logo from '../Logo/Logo';
import './Login.css';

class Login extends Component {
    state = {
        user: ''
    };
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
        console.log(this.state.user);
        //// TODO:  go to dashboard
    }
    render() {
        const { users, loading } = this.props;
        const userArray = users ? Object.keys(users) : [];
        return (
            <div className='login'>
                <form className='login-box' onSubmit={this.handleSubmit}>
                    <div className='sign-in'>Sign In</div>
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
                        <button disabled={this.state.user != '' ? false: true}>SUBMIT</button>
                    </div>
                </form>
            </div>
        )
    }

}

function mapStateToProps({ users }) {
    return {
        loading: users === null,
        users
    }
}


export default connect(mapStateToProps)(Login);
