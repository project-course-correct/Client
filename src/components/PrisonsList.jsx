import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { getPrisons } from '../states/actionCreators';
import Prison from './Prison';

export class PrisonsList extends React.Component {
    componentDidMount() {
        this.props.getPrisons();
    }

    render() {
        return (
            <div className="prisons-list">
                {
                    this.props.prisons.map(prison => (
                        <Prison prison={prison}/>
                    ))
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        prisons: state.prisons
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getPrisons,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PrisonsList);