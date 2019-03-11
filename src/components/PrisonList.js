import React from 'react';
import Prison from './Prison';

const PrisonsList = props => (
    <div>
        {props.prisons.map(prison => {
            return <Prison prison={prison} />
        })}
    </div>
)

export default PrisonsList;