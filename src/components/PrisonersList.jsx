import React from 'react';
import { connect } from "react-redux";


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

function mapStateToProps(state) {
    return {
        prisoners: state.prisoners
    }
}
  
export default connect(mapStateToProps)(PrisonersList); 
  