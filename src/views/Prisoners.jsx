import React from 'react';
import { Route } from 'react-router-dom';
import PrisonersList from '../components/PrisonersList';

export class Prisoners extends React.Component {
    render() {
        return (
            <div className="prisoners-container">
                {
                    this.props.prisons.map(prison => {
                        <Route path={`/prisons/${prison.name}`} render={() => (
                            <PrisonersList prisonersList={prison.prisoners} />
                        )} />
                    })
                }
            </div>
        )
    }
}