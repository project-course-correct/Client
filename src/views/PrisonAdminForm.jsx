import React from 'react';

export default class PrisonAdminform extends React.Component {
    constructor(props) {
        super(props);
    }
    nameRef = React.createRef();
    skillRef = React.createRef(); 

    render() {
        console.log(this.props.prison)
        return (
            <form>
                <select name="prisoners" value={this.props.selectedPrisonerId} onChange={() =>{}}>
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