// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    background: #282c34;
    padding: 1rem;
`;

const NavList = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
`;

const NavItem = styled.li`
    margin-right: 1rem;
`;

const Navbar = () => {
    return (
        <Nav>
            <NavList>
                <NavItem><Link to="/">Home</Link></NavItem>
                <NavItem><Link to="/portfolio">Portfolio</Link></NavItem>
                <NavItem><Link to="/market">Market</Link></NavItem>
            </NavList>
        </Nav>
    );
};

export default Navbar;
