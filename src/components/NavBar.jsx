import React from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends React.Component {
    render() {
        return (
            <nav>
                <NavLink to="/prisons">Prisons</NavLink>
                <NavLink to={"/"}>My Prison</NavLink>
                <NavLink to={"/"}>Update Prisoners</NavLink>
                <NavLink to="/">LogOut</NavLink>
            </nav>
        )
    }
}