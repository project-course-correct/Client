import React from 'react';
import Prisoner from './Prisoner';

export default function PrisonersList({ prisonersList }) {
    return (
        <div className="prisoners-list">
            {
                prisonersList.map(prisoner => (
                    <Prisoner prisoner={prisoner}/>
                ))
            }
        </div>
    )
}