import React from 'react';
import PT from 'prop-types';

export default function Prison({ prison }) {
    return (
        <div>
            <h2>{prison.location}</h2>
            <p>{prison.population}</p>
            <p>{prison.zipcode}</p>
        </div>
    )
}

Prison.propTypes = {
    prison: PT.shape({
        id: PT.number.isRequired,
        location: PT.string.isRequired,
        population: PT.number.isRequired,
        zipcode: PT.number.isRequired,
    }).isRequired,
}