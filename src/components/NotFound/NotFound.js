import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='not-found'>
            <div className='text-404'>404</div>
            <div>Page Not Found.</div>
            <div>
                <NavLink to="/">Click here</NavLink> to go back to home page.
            </div>
        </div>
    )
}

export default NotFound;
