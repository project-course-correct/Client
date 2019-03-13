import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import PT from 'prop-types';

import { signUp } from '../states/actionCreators';

export class SignUp extends React.Component {
    locationRef = React.createRef();
    passwordRef = React.createRef();
    zipcodeRef = React.createRef();
    populationRef = React.createRef();

    onSignUp(event) {
        event.preventDefault();

        const locInput = this.locationRef.current;
        const pswInput = this.passwordRef.current;
        const zipInput = this.zipcodeRef.current;
        const popInput = this.populationRef.current;

        const newPrison = {
            location: locInput.value,
            population: popInput.value,
            zipcode: zipInput.value,
            password: pswInput.value,
        }

        this.props.signUp(newPrison);

        locInput.value = "";
        pswInput.value = "";
        zipInput.value = 0;
        popInput.value = 0;
    }

    render() {
        return (
            <form>
                <input ref={this.locationRef} type="text" placeholder="location" />
                <input ref={this.passwordRef} type="password" placeholder="password" />
                <input ref={this.zipcodeRef} type="number" placeholder="zipcode" />
                <input ref={this.populationRef} type="number" placeholder="population" />
                <button onClick={e => this.onSignUp(e)}>Sign Up</button>
            </form>
        )
    }
}

SignUp.propTypes = {
    signUp: PT.func.isRequired,
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        signUp,
    }, dispatch);
}

export default connect(st => st, mapDispatchToProps)(SignUp);