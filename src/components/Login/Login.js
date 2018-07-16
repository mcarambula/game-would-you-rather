import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from '../Logo/Logo';
import { setUser } from '../../actions/users';
import './Login.css';

class Login extends Component {
    state = {
        user: ''
    };
    componentDidMount() {
       /*const userId = localStorage.getItem('wy-userId');
        if (userId !== null) {
            this.props.setUser(userId);
            this.props.history.push('/dashboard');
        }*/
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
        localStorage.setItem('wy-userId', JSON.stringify(this.state.user));
        this.props.setUser(this.state.user);
        this.props.history.push('/dashboard/questions');
    }
    render() {
        const { users, loading } = this.props;
        const userArray = users ? Object.keys(users) : [];
        return (
            <div className='Login'>
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
                        <button disabled={this.state.user !== '' ? false: true}>SUBMIT</button>
                    </div>
                </form>
            </div>
        )
    }

}


const mapDispatchToProps = { setUser };

function mapStateToProps({ users }) {
    return {
        loading: users === null,
        users
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
