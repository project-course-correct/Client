import React from 'react';
import { Route } from 'react-router-dom';
import PrisonersList from '../components/PrisonersList';

export default function Prisoners({ prison }) {
    return (
        <div className="prisoners-container">
            <Route path={`/prisons/${prison.name}`} render={() => (
                    <PrisonersList prisonersList={prison.prisoners} />
                )} 
            />
        </div>
    )
}