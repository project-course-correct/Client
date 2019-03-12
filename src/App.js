import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from "react-redux";

import NavBar from './components/NavBar';
import Prisons from './views/Prisons';
import Prisoners from './views/Prisoners';



export class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar />

          <Route exact path="/prisons" component={Prisons} />
          {
            this.props.prisons.map(prison => (
              <Route key={prison.id} path={`/prisons/${prison.name}`} render={pr => <Prisoners prison={prison} {...pr} />}/>
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
