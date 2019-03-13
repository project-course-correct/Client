import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import NavBar from './components/NavBar';
import Prisons from './views/Prisons';
import Prisoners from './views/Prisoners';
import PrisonAdminForm from './views/PrisonAdminForm';
import { getPrisons, selectPrisonerId, addPrisoner,} from './states/actionCreators';
import Spinner from './components/Spinner';
import SignUp from './views/SignUp';



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
          <Route path={`/prisoner_form`} component={PrisonAdminForm} />
          <Route path="/sign_up" component={SignUp} />
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
  }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App)); 
