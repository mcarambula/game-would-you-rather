import React from 'react';
import { withRouter, NavLink  } from 'react-router-dom';
import menu from '../../utils/menu';
import './Menu.css';

const Menu  = () => (
    <div className='menu'>
        {
            Object.keys(menu).map((menuItem, i) => (
                <NavLink
                    exact
                    key={i}
                    activeClassName='active'
                    className='item'
                    to={`/${menu[i].path}`}>
                     {menu[i].title}
                 </NavLink>
            ))
        }
    </div>
)

export default withRouter(Menu);
