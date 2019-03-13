import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import NavBar from './components/NavBar';
import Prisons from './views/Prisons';
import Prisoners from './views/Prisoners';
import PrisonAdminform from './views/PrisonAdminForm';
import { getPrisons, selectPrisonerId, addPrisoner, getPrisonersByPrisonId } from './states/actionCreators';
import Spinner from './components/Spinner';



export class App extends Component {
  componentDidMount() {
    this.props.getPrisons();
  }

  render() {
    return (
      <div className="App">
        <Spinner>
          <NavBar />

          <Route exact path="/prisons" component={Prisons} />
          {
            this.props.prisons.map(prison => (
              <Route 
                key={prison.id} 
                path={`/prisons/${prison.location}`} 
                component={Prisoners}
              />
            ))
          }
          <Route 
            path="/prisoner_form" 
            render={pr => 
              <PrisonAdminform 
                {...pr} 
                prison={this.props.prisons.find(prison => prison.id === parseInt(this.props.authedId))} 
                selectedPrisonerId={this.props.selectedPrisonerId}
                selectPrisonerId={this.props.selectPrisonerId}
                addPrisoner={this.props.addPrisoner}
              />
            } 
          />
        </Spinner>
          
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      prisons: state.prisons,
      authedId: state.authedId,
      selectedPrisonerId: state.selectedPrisonerId,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
      getPrisons,
      selectPrisonerId,
      addPrisoner,
      getPrisonersByPrisonId,
  }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App)); 
