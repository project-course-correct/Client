import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';


import { getPrisons } from '../states/actionCreators';
import PrisonsList from '../components/PrisonsList';

export class Prisons extends React.Component {
    componentDidMount() {
        this.props.getPrisons();
    }
    
    render() {
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getPrisons,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Prisons);