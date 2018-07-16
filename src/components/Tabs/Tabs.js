import React, { Component } from 'react';
import './Tabs.css';

class Tabs extends Component {
    state = {
        active: 0
    }
    render() {
        return (
            <div className='tabs-container'>
                <div className='tabs'>
                    <div 
                        className={`tab ${this.state.active === 0 ? 'active' : ''}`}
                        onClick={ ()=> this.setState({active: 0})}>
                        Unaswered
                    </div>
                    <div 
                        className={`tab ${this.state.active === 1 ? 'active' : ''}`}
                        onClick={ ()=> this.setState({active: 1})}>
                        Answered
                    </div>
                 </div>
                 <div className='tabs-content'></div>
            </div>
        )
    }

}

export default Tabs;
