import React from 'react';

export default class PrisonAdminform extends React.Component {
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
                        this.props.prison.prisoners.map(prisoner => 
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