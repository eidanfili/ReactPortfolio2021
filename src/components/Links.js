import React from 'react';
import '../styles/Links.scss'
import {Link} from 'react-router-dom';

const NavLink = (props) => {
    return (
        <div className="link">
            <Link className="link_domlink"to={props.src}>{props.text}</Link>
        </div>
    );
}

export default NavLink;
