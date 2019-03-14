import React from 'react';
import { connect } from "react-redux";
import PT from 'prop-types';
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
}

PrisonersList.propTypes = {
    prisoners: PT.arrayOf(PT.shape({
        id: PT.number.isRequired,
        name: PT.string.isRequired,
        id_number: PT.number.isRequired,
        prison_id: PT.number.isRequired,
    }).isRequired).isRequired,
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
  