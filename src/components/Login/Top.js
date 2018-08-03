import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { getColorLines } from '../../utils/general';
import Logo from '../Logo/Logo';

const Top = ({ title }) => (
    <Fragment>
        <div className='sign-in'>
            { getColorLines() }
            {title}
        </div>
        <Logo />
    </Fragment>
)

Top.defaultProps = {
    title: 'Sign In'
}
Top.propTypes = {
    title: PropTypes.string
}

export default Top;
