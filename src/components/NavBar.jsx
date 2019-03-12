import React from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends React.Component {
    render() {
        return (
            <nav>
                <NavLink to="/prisons">Find a Prison Near You</NavLink>
                <br/>
                <NavLink to="/prisoner-addform">Add a New Future Employee</NavLink>
            </nav>
        )
    }
}