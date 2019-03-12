import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Prisons from './views/Prisons';
import { Login, Authenticate, PrisonerForm }  from './components';


class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar />

          <Route path="/prisons" component={Prisons} />
          <Route path="/prisoner-addform" component={PrisonerForm} />
      </div>
    );
  }
}

export default Authenticate(App)(Login);
