import React from 'react';
import { connect } from "react-redux";

import PrisonsList from '../components/PrisonsList';

export class Prisons extends React.Component {
    render() {
        console.log(this.props.prisons);
        return (
            <div className="prisons-container">
                <PrisonsList prisons={this.props.prisons} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        prisons: state.prisons
    }
}

export default connect(mapStateToProps)(Prisons);