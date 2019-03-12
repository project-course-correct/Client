import React from 'react';
import LoginForm from './LoginForm';

const Authenticate = App => Login => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loggedIn: false
            };
        };

        componentDidMount() {
            if (!localStorage.getItem('user')) {
                this.setState({ loggedIn: false });
            }
            else {
                this.setState({ loggedIn: true });
            };
        };

        render() {
            if (this.state.loggedIn) {
                return <App />;
            }
            else {
                return <LoginForm />;
            }
        };
    };
};

export default Authenticate;