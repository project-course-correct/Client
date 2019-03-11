import React from 'react';
import { Route } from 'react-router-dom';

export class Prisoners extends React.Component {
    render() {
        return (
            <div className="prisoners-container">
                {
                    this.props.prisons.map(prison => {
                        <Route path={`/prisons/${prison.name}`} render={/* to fill */} />
                    })
                }
            </div>
        )
    }
}