import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Prisons from './views/Prisons';


class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar />

          <Route path="/prisons" component={Prisons} />
      </div>
    );
  }
}

export default App;
