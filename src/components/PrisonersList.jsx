import React from 'react';
import { connect } from "react-redux";
import PT from 'prop-types';


import Prisoner from './Prisoner';

export class PrisonersList extends React.Component{
    render() {
        return (
            <div className="prisoners-list">
                {
                    this.props.prisoners.map(prisoner => (
                        <Prisoner key={prisoner.id} prisoner={prisoner}/>
                    ))
                }
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
        prisoners: state.prisoners
    }
}
  
export default connect(mapStateToProps)(PrisonersList); 
  