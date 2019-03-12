import React from 'react';
import Prisoner from '../components/Prisoner';

export default class PrisonAdminform extends React.Component {
    constructor(props) {
        super(props);
    }
    nameRef = React.createRef();
    skillRef = React.createRef(); 

    render() {
        return (
            <form>
                <select name="prisoners" value={} onChange={}>
                    <option value="" >Choose a prisoner</option>
                    {
                        prison.prisoners.map(prisoner => 
                            <option key={prisoner.id} value={prisoner.id}>{prisoner.name}</option>   
                        )
                    }
                </select>
            </form>
        )
    }
}