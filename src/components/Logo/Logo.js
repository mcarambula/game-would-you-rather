import React from 'react';
import './Logo.css';

const Logo = ({navBar = false}) => (
    <div className={`logo ${navBar ? 'small' : '' }`}>Would you rather... </div>
)

export default Logo;
