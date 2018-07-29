import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';

const Tabs = ({ active, options, changeTab }) => (
    <div className='tabs-container'>
        {
            options.map((option, index) => (
                <div
                    key={index}
                    className={`tab ${active === index ? 'active' : ''}`}
                    onClick={ () => changeTab(index)}>
                    {option}
                </div>
            ))
        }
    </div>
)

Tabs.propTypes =  {
    active: PropTypes.number.isRequired,
    options: PropTypes.array.isRequired,
    changeTab: PropTypes.func.isRequired ,
}

Tabs.defaultProps =  {
    active: 0,
    options: [],
    changeTab: () => {}
}

export default Tabs;
