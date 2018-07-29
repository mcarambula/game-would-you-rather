import React from 'react';
import { connect } from 'react-redux';
import './LeaderBoard.css';

const LeaderBoard = ({ positions, users, authedUser }) => {
    return (
        <div className='leaderboard'>
              { positions.map((userLeaderBoard, index) => {
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

function mapStateToProps ({ authedUser, users }) {
    const positions = Object.keys(users).map(id => ({
        id,
        created : (users[id].questions) ? users[id].questions.length : 0,
        answered: (users[id].answers) ? Object.keys(users[id].answers).length : 0
    })).sort((a, b) =>  b.created + b.answered - (a.created + a.answered))
    return {
        authedUser,
        positions,
        users
    }
}

export default connect(mapStateToProps)(LeaderBoard);
