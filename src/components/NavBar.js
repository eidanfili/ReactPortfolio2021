import React, { Component } from 'react';

import '../styles/NavBar.scss';
import NavLink from './Links';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="navbar_title_wrapper"><Link className="navbar_title" to="/">Eidan Ledezma</Link></div>
                <div className="navbar_links">
                    <NavLink src="/portfolio" text="Portfolio"/>
                    <NavLink src="/contact" text="Contact"/>
                </div>
            </div>
        );
    }
}

export default Navbar;
