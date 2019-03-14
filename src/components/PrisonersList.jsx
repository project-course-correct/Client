import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { deleteAccount, logOut, getPrisonersByPrisonId } from '../states/actionCreators';
import Prisoner from './Prisoner';

export class PrisonersList extends React.Component{
    componentDidMount() {
        this.props.getPrisonersByPrisonId(this.props.id);
    }
    onDelete(event) {
        event.preventDefault();
        this.props.deleteAccount(this.props.authedPrison.id);
        this.props.logOut();
    }

    render() {
        if (this.props.prisoners) {
            return (
                <div className="prisoners-list">
                    {   
                        this.props.prisoners.map(prisoner => (
                            <Prisoner key={prisoner.id} prisoner={prisoner}/>
                        ))
                    }
                    <Link to="/prisons" onClick={e => this.onDelete(e)}>Delete Account</Link>
                </div>
            )
        } 
        return (
            <div className="prisoners-list">
                <p>There is no prisoner here!</p>
                <Link to="/prisons" onClick={e => this.onDelete(e)}>Delete Account</Link>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        prisoners: state.prisoners,
        authedPrison: state.authedPrison,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        deleteAccount,
        logOut,
        getPrisonersByPrisonId
    }, dispatch);
}
  
export default connect(mapStateToProps, mapDispatchToProps)(PrisonersList); 
  