import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { fetchPrisoners } from '../states/actions/actionCreators';
import { PrisonersList } from '../components';

class Prisoners extends React.Component {
    state = {
        prisoners: []
    }
    
    componentDidMount() {
        this.props.fetchPrisoners();
    }

    // addPrisoner = e => {
        // Fill in object
    // }

    render() {
        return (
            <div className="prisoners-container">
                <Route
                    path={`/prisons/${this.props.prison.name}`}
                    render={() => <PrisonersList prisoners={this.state.prisoners} />}
                />
            </div>
        );
    };
};

const mapStateToProps = ({ prisonersReducers }) => ({
    prisoners: prisonersReducers.prisoners,
    fetching: prisonersReducers.fetching,
    error: prisonersReducers.error
});

export default connect(mapStateToProps, { fetchPrisoners })(Prisoners);


// SOMETHING TO IGNORE FOR NOW

// return (
//     <div className="prisoners-container">
//         <Route path={`/prisons/${prison.name}`}>
//             <PrisonersList prisoners={this.props.prisoners} />
//         </Route>
//     </div>
// );