import React from 'react';

export default class PrisonAdminform extends React.Component {
    nameRef = React.createRef();
    skillRef = React.createRef(); 

    render() {
        return (
            <form>
                <select name="prisoners" value={this.props.selectedPrisonerId} onChange={e=> this.props.selectPrisonerId(e.target.value)}>
                    <option value="" >Choose a prisoner</option>
                    {
                        this.props.prison.prisoners.map(prisoner => 
                            <option key={prisoner.id} value={prisoner.id}>{prisoner.name}</option>   
                        )
                    }
                </select>
            </form>
        )
    }
}