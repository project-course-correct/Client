import React from 'react';

class LoginForm extends React.Component {
    state = {
        username: '',
        password: ''
    }
    
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submitHandler = () => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    };

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.changeHandler}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.changeHandler}
                        required
                    />
                    <button type="submit">Login here</button>
                </form>
            </div>
        )
    }
};

export default LoginForm;