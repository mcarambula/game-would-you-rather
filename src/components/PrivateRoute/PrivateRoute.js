import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Menu from '../Menu/Menu';

/* Based on: https://tylermcginnis.com/react-router-protected-routes-authentication/ */
const PrivateRoute = ({ authedUser, component: Component, ...rest }) =>  (
    <Route {...rest}  render={ props =>
        authedUser
          ? (
              <div className='Dashboard'>
                  <NavBar />
                  <div className='app-content'>
                      <Menu />
                      <div className='container'>
                          <Component {...props} />

                      </div>
                  </div>
              </div>
            )
          : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      }
    />
);

function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(PrivateRoute);
