import React from 'react';

import PrisonsList from '../components/PrisonsList';

export default class Prisons extends React.Component {
    render() {
        return (
            <div className="prisons-container">
                <PrisonsList />
            </div>
        )
    }
}