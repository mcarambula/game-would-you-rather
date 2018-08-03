import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLeaderBoard } from '../../utils/general';
import './LeaderBoard.css';

const LeaderBoard = ({ positions, users, authedUser }) => {
    return (
        <div className='leaderboard'>
              { positions.map((userLeaderBoard) => {
                      const user = users[userLeaderBoard.id];
                      const score = userLeaderBoard.created + userLeaderBoard.answered;
                      return (
                            <div className='leaderboard-item' key={userLeaderBoard.id}>
                                <h3 className={`${authedUser === user.id ? 'selected' : ''}`}>{user.name}</h3>
                                <div className='row'>
                                      <img src={user.avatarURL} alt={user.name} />
                                      <div className='column'>
                                          <div>Created Questions: {userLeaderBoard.created}</div>
                                          <div>Answered Questions: {userLeaderBoard.answered}</div>
                                      </div>
                                      <div className='score'>
                                          Score
                                          <div>{score}</div>
                                      </div>
                                </div>
                            </div>
                            )
                    })
              }
        </div>
    );
}

LeaderBoard.propTypes =  {
    positions: PropTypes.array.isRequired,
	users: PropTypes.object.isRequired,
    authedUser: PropTypes.string.isRequired
}

LeaderBoard.defaultProps =  {
    positions: [],
	users: {},
    authedUser: ''
}

function mapStateToProps ({ authedUser, users }) {
    const positions = getLeaderBoard(users);
    return {
        authedUser,
        positions,
        users
    }
}

export default connect(mapStateToProps)(LeaderBoard);
