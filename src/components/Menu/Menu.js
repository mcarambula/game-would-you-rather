import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import menu from '../../utils/menu';
import './Menu.css';

class Menu extends Component {
    state = {
        active: 0
    }
    goTo = (index, path) => {
        this.setState({ active: index });
        this.props.history.push(`/${path}`);
    }
    render() {
        const { active } = this.state;
        return (
            <div className='menu'>
                {
                    Object.keys(menu).map((menuItem, i) => (
                        <div
                            key={i}
                            className={`item ${active === i ? 'active' : ''}`}
                            onClick={() => this.goTo(i, menu[i].path) }>
                             {menu[i].title}
                         </div>
                    ))

                }
            </div>
        )
    }

}

export default withRouter(Menu);
