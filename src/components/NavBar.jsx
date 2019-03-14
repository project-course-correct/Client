import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import PT from 'prop-types';

import { logOut } from '../states/actionCreators';

export class NavBar extends React.Component {
    onLogOut(event) {
        event.preventDefault();
        this.props.logOut();
        localStorage.clear();
    }

    render() {
        return (
            <nav>
                <NavLink to="/prisons">Prisons</NavLink>
                {
                    localStorage.getItem('token')
                    ?   <>
                            <NavLink to={`/prisons/${this.props.authedPrison.location}`}>My Prison</NavLink>
                            <NavLink to="/prisoner_form">Update Prisoners</NavLink>
                            <NavLink onClick={e => this.onLogOut(e)} to="/">LogOut</NavLink>
                        </>
                    :   <>
                            <NavLink to="/sign_up">Sign Up</NavLink>
                            <NavLink to="/login">Login</NavLink>
                        </>   
                }
            </nav>
        )
    }
}

NavBar.propTypes = {
    authedPrison: PT.shape({
        id: PT.number.isRequired,
        location: PT.string.isRequired,
        population: PT.number.isRequired,
        zipcode: PT.number.isRequired,
    }).isRequired,
}

function mapStateToProps(state) {
    return {
        authedPrison: state.authedPrison,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        logOut,
    }, dispatch);
}
  
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);