import React from 'react';
import PT from 'prop-types';

export default function Prison({ prison }) {
    return (
        <div>{prison.location}</div>
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