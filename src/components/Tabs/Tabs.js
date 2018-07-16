import React, { Component } from 'react';
import './Tabs.css';

const Tabs = ({ active, options, changeTab }) => (
    <div className='tabs-container'>
        {
            options.map((option, index) => (
                <div
                    className={`tab ${active === index ? 'active' : ''}`}
                    onClick={ () => changeTab(index)}>
                    {option}
                </div>
            ))
        }
    </div>
)

export default Tabs;
