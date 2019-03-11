import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from "react-redux";

import NavBar from './components/NavBar';
import Prisons from './views/Prisons';
import PrisonersList from './components/PrisonersList';



export class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar />

          <Route exact path="/prisons" component={Prisons} />
          {
            this.props.prisons.map(prison => (
              <Route path={`/prisons/${prison.name}`} render={pr => <PrisonersList prisonersList={prison.prisoners} {...pr} />}/>
            ))
          }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      prisons: state.prisons
  }
}

export default withRouter(connect(mapStateToProps)(App)); 
