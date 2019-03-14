import React from 'react';
import PrisonersList from '../components/PrisonersList';

export default function Prisoners({ id }) {
    return (
        <div className="prisoners-container">
            <PrisonersList id={id}/>
        </div>
    )
}