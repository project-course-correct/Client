import React from 'react';

export default function Prisoner({ prisoner }) {
    return (
        <div className="prisoner">
            <h2>{prisoner.name}</h2>
            <p><span>Skills:</span>{prisoner.skills}</p>
        </div>
    )
}