import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import PT from 'prop-types';

import { login } from '../states/actionCreators';

export class Login extends React.Component {
    locationRef = React.createRef();
    passwordRef = React.createRef();

    onLogin(event) {
        event.preventDefault();

        const locInput = this.locationRef.current;
        const pswInput = this.passwordRef.current;

        const newLogin = {
            location: locInput.value,
            password: pswInput.value
        }

        this.props.login(newLogin);

        locInput.value = "";
        pswInput.value = "";
    }
    
    render() {
        return (
            <form>
                <input ref={this.locationRef} type="text" placeholder="location" />
                <input ref={this.passwordRef} type="password" placeholder="password" />
                <button onClick={e => this.onLogin(e)}>Login</button>
            </form>
        )
    }
}

Login.propTypes = {
    login: PT.func.isRequired,
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        login,
    }, dispatch);
}
  
  export default connect(st => st, mapDispatchToProps)(Login); 
  