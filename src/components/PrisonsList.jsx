import React from 'react';
import { NavLink } from 'react-router-dom';

import Prison from './Prison';

export default function PrisonsList ({ prisons }) {
    return (
        <div className="prisons-list">
            {
                prisons.map(prison => (
                    <NavLink key={prison.id} to={`/prisons/${prison.name}`}>
                        <Prison prison={prison}/>
                    </NavLink>
                ))
            }
        </div>
    )
}

