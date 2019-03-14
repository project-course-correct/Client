import React from 'react';
import PT from 'prop-types';

export default function Prisoner({ prisoner }) {
    return (
        <div className="prisoner">
            <h2>{prisoner.name}</h2>
            <p><span>Skills:</span>{prisoner.skills}</p>
        </div>
    )
}

Prisoner.propTypes = {
    prisoner : PT.shape({
        id: PT.number.isRequired,
        name: PT.string.isRequired,
        id_number: PT.number.isRequired,
        prison_id: PT.number.isRequired,
    }).isRequired,
}