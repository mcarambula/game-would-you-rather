import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewQuestion extends Component {
    render() {
        return (
            <div className='New-Question'>
                New Question
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        users
    }
}


export default connect(mapStateToProps)(NewQuestion);
