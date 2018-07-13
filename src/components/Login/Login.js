import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logo from '../Logo/Logo';
import './Login.css';

class Login extends Component {
    state = {
        user: ''
    };
    render() {
        const { users, loading } = this.props;
        const userArray = users ? Object.keys(users) : [];
        return (
            <div className='login'>
                <div className='login-box'>
                    <div className='sign-in'>Sign In</div>
                    <Logo />
                    <div className='inner-box'>
                        User:
                        <select>
                            {
                            !loading ? (
                                    userArray.map( id => (
                                        <option key={id} value={id}>
                                            {users[id].name}
                                        </option>
                                    ))
                                )
                            :
                                <option>Loading... </option>
                            }
                        </select>
                        <button>SUBMIT</button>
                    </div>
                </div>
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
