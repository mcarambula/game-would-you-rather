import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tabs from '../Tabs/Tabs';

class Questions extends Component {
    render() {
        return (
            <div className='Questions'>
               <Tabs />
            </div>
        )
    }

}

function mapStateToProps({ users }) {
    return {
        users
    }
}


export default connect(mapStateToProps)(Questions);
