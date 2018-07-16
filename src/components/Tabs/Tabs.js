import React, { Component } from 'react';
import './Tabs.css';

class Tabs extends Component {
    render() {
        return (
            <div className='tabs-container'>
                <div className='tabs'>
                    <div
                        className={`tab ${this.props.active === 0 ? 'active' : ''}`}
                        onClick={ () => this.props.changeTab(0)}>
                        Unaswered
                    </div>
                    <div
                        className={`tab ${this.props.active === 1 ? 'active' : ''}`}
                        onClick={ ()=> this.props.changeTab(1)}>
                        Answered
                    </div>
                 </div>
            </div>
        )
    }

}

export default Tabs;
