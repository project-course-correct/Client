import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import PT from 'prop-types';

import { selectPrisonerId, addPrisoner } from '../states/actionCreators'

export class PrisonAdminForm extends React.Component {
    nameRef = React.createRef();
    skillRef = React.createRef(); 

    onAddPrisoner(event) {
        event.preventDefault();
        const nameInput = this.nameRef.current;
        const skillInput = this.skillRef.current;

        const newSkills = skillInput.value.split(",");
        const newPrisoner = {
            name: nameInput.value,
            skills: newSkills,
        }

        this.props.addPrisoner(newPrisoner);

        nameInput.value = "";
        skillInput.value = "";
    }

    render() {
        return (
            <form>
                <select 
                    name="prisoners" 
                    value={this.props.selectedPrisonerId} 
                    onChange={e=> this.props.selectPrisonerId(e.target.value)}
                >
                    <option value="" >Choose a prisoner</option>
                    {
                        this.props.prisoners.map(prisoner => 
                            <option key={prisoner.id} value={prisoner.id}>{prisoner.name}</option>   
                        )
                    }
                </select>
                <input type="text" placeholder="name" ref={this.nameRef}/>
                <input type="text" placeholder="skills" ref={this.skillRef}/>
                <button onClick={e => this.onAddPrisoner(e)}>Add Prisoner</button>
            </form>
        )
    }
}

PrisonAdminForm.propTypes = {
    prisoner : PT.arrayOf(PT.shape({
        id: PT.number.isRequired,
        name: PT.string.isRequired,
        id_number: PT.number.isRequired,
        prison_id: PT.number.isRequired,
    })),
    selectedPrisonerId: PT.number,
    selectPrisonerId: PT.func.isRequired,
    addPrisoner: PT.func.isRequired,
}

function mapStateToProps(state) {
    return {
        prisoners: state.prisoners,
        selectedPrisonerId: state.selectedPrisonerId,
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectPrisonerId,
        addPrisoner,
    }, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(PrisonAdminForm); 
  