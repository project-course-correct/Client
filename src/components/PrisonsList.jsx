import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { getPrisonersByPrisonId } from '../states/actionCreators';

import Prison from './Prison';

export class  PrisonsList extends React.Component {
    
    render() {
        return (
            <div className="prisons-list">
                {
                    this.props.prisons.map(prison => (
                        <NavLink 
                            key={prison.id} 
                            onClick={() => this.props.getPrisonersByPrisonId(prison.id)} 
                            to={`/prisons/${prison.location}`}
                        >
                            <Prison prison={prison}/>
                        </NavLink>
                    ))
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        prisons: state.prisons
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getPrisonersByPrisonId,
    }, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(PrisonsList);
