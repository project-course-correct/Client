import React from 'react';
import Prisoner from './Prisoner';

export default function PrisonersList({ prisonersList }) {
    return (
        <div className="prisoners-list">
            {
                prisonersList.map(prisoner => (
                    <Prisoner key={prisoner.id} prisoner={prisoner}/>
                ))
            }
        </div>
    )
}