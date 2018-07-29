import React from 'react';
import PropTypes from 'prop-types';
import './Logo.css';
import { WOULD_YOU_RATHER } from '../../utils/variables';

const Logo = ({ navBar }) => (
    <div className={`logo ${navBar ? 'small' : '' }`}>{WOULD_YOU_RATHER}</div>
)

Logo.propTypes = {
    navBar: PropTypes.bool
}

Logo.defaultProps = {
    navBar: false
}

export default Logo;
