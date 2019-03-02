import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-success">
            <nav className="navbar navbar-dark container">
                <NavLink to="/" className="navbar-brand">Contacts</NavLink>
                <NavLink to='/new' className="btn btn-light">Add new contact</NavLink>
            </nav>
        </header>
    );
};

export default Header;
