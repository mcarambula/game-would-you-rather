import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class LeaderBoard extends PureComponent {
  render() {
    const { positions, users } = this.props;
    return (
        <div>
              { positions.map((user, index) =>
                <div key={user.id}>
                  <div>{users[user.id].name}</div>
                  <div>{user.created}</div>
                  <div>{user.answered}</div>
              </div>)
              }
        </div>
    );
  }
}

function mapStateToProps ({ users }) {
    console.log(users);
    const positions = Object.keys(users).map(id => ({
        id,
        created : (users[id].questions) ? users[id].questions.length : 0,
        answered: (users[id].answers) ? Object.keys(users[id].answers).length : 0
    })).sort((a, b) =>  b.created + b.answered - (a.created + a.answered))
    return {
        positions,
        users
    }
}

export default connect(mapStateToProps)(LeaderBoard);
