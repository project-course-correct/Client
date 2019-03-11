import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPrisons } from '../states/actions/actionCreators';
import { PrisonList } from '../components';

class Prisons extends React.Component {
    componentDidMount() {
        this.props.getPrisons();
    }

    render() {
        return (
            <div>
                {this.props.getting ? (
                    <p>Selection inbound.</p>
                ) : (
                    <PrisonList prisons={this.props.prisons} />
                )}
            </div>
        );
    };
};

const mapStateToProps = ({ prisonsReducers }) => {
    return {
        prisons: prisonsReducers.prisons,
        getting: prisonsReducers.getting,
        error: prisonsReducers.error
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getPrisons
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Prisons);