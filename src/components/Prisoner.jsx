import React from 'react';

const Prisoner = ({ prisoner }) => (
    <div>
        <p>
            <strong>{prisoner.name}</strong>
            {prisoner.skills}
        </p>
    </div>
);

export default Prisoner;