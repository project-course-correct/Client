import React from 'react';
import PT from 'prop-types';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { getPrisonerSkills } from '../states/actionCreators'

export class Prisoner extends React.Component {
    componentDidMount() {
        this.props.getPrisonerSkills(this.props.prisoner.id)
    }

    render() {
        if (this.props.skills !== null) {
            return (
                <div className="prisoner">
                    <h2>{this.props.prisoner.name}</h2>
                   <span>Skills:</span>{this.props.skills.map(skill => <p>{skill.name}</p>)}
                </div>
            )
        }
        return (
            <div className="prisoner">
                <h2>{this.props.prisoner.name}</h2>
                <p><span>Skills:</span>Prisoner has no skill!</p>
            </div>
        )
        
    }
    
}

Prisoner.propTypes = {
    prisoner : PT.shape({
        id: PT.number.isRequired,
        name: PT.string.isRequired,
        id_number: PT.number.isRequired,
        prison_id: PT.number.isRequired,
    }).isRequired,
}

function mapStateToProps(state) {
    return {
        skills: state.skills
    }
}
  
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getPrisonerSkills,
    }, dispatch);
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Prisoner); 
  