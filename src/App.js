import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import NavBar from './components/NavBar';
import Prisons from './views/Prisons';
import Prisoners from './views/Prisoners';
import PrisonAdminForm from './views/PrisonAdminForm';
import { getPrisons, selectPrisonerId, login } from './states/actionCreators';
import Spinner from './components/Spinner';
import SignUp from './views/SignUp';
import Login from './views/Login';



export class App extends Component {
  componentDidMount() {
    this.props.getPrisons();
    if (localStorage.getItem('token')) {
      const location = localStorage.getItem('location');
      const password = localStorage.getItem('password');
      const newLogin = {
        location,
        password,
    }
    this.props.login(newLogin);
    }
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
                render={pr => <Prisoners {...pr} id={prison.id} />}
              />
            ))
          }
          <Route path={`/prisoner_form`} component={PrisonAdminForm} />
          <Route path="/sign_up" component={SignUp} />
          <Route path="/login" component={Login} />
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
      authedPrison: state.authedPrison,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
      getPrisons,
      selectPrisonerId,
      login,
  }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App)); 
