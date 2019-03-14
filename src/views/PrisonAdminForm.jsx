import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import PT from 'prop-types';

import { selectPrisonerId, addPrisoner, editPrisoner, deletePrisoner, getPrisonersByPrisonId } from '../states/actionCreators'

export class PrisonAdminForm extends React.Component {
    nameRef = React.createRef();
    skillRef = React.createRef(); 
    idNumberRef = React.createRef();

    componentDidUpdate() {
        if (this.props.authedPrison && !this.props.prisoners) {
            this.props.getPrisonersByPrisonId(this.props.authedPrison.id)
        }
    }

    onAddPrisoner(event) {
        event.preventDefault();
        const nameInput = this.nameRef.current;
        const skillInput = this.skillRef.current;
        const idInput = this.idNumberRef.current;

        const newPrisoner = {
            name: nameInput.value,
            skills: skillInput.value,
            id_number: idInput.value,
        }

        this.props.addPrisoner(newPrisoner);
        nameInput.value = "";
        skillInput.value = "";
        idInput.value = 0;
    }

    onEditPrisoner(event) {
        //to finish
        event.preventDefault();
        const nameInput = this.nameRef.current;
        const skillInput = this.skillRef.current;
        const idInput = this.idNumberRef.current;

        const newPrisoner = {
            name: nameInput.value,
            skills: skillInput.value,
            id_number: idInput.value,
        }

        this.props.editPrisoner(newPrisoner);
        nameInput.value = "";
        skillInput.value = "";
        idInput.value = 0;
    }

    onDeletePrisoner(event) {
        event.preventDefault();
        this.props.deletePrisoner(this.props.selectedPrisonerId);
    }

    render() {
        if(this.props.prisoners !== null) {
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
                    <input type="number" placeholder="id number" ref={this.idNumberRef}/>
                    <button onClick={e => this.onAddPrisoner(e)}>Add Prisoner</button>
                    <button onClick={e => this.onEditPrisoner(e)}>Edit Prisoner</button>
                    <button onClick={e => this.onDeletePrisoner(e)}>Delete Prisoner</button>
                </form>
            )
        }
        return (
            <div></div>
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
        authedPrison: state.authedPrison,
    }
}
  
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectPrisonerId,
        addPrisoner,
        editPrisoner,
        deletePrisoner,
        getPrisonersByPrisonId
    }, dispatch);
}
  
export default connect(mapStateToProps, mapDispatchToProps)(PrisonAdminForm); 
  