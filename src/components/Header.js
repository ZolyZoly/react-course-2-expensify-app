import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header> 
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Go Home</NavLink>
        <NavLink to="/create" activeClassName="is-active">Go Create Page</NavLink>
    </header>
);

export default Header;