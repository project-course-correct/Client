import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PT from 'prop-types';

const StyledSpinner = styled.div`
  .spinner {
    display: ${props => (props.spinnerOn ? "block" : "none")};
  }
  .children {
    display: ${props => (props.spinnerOn ? "none" : "block")};
  }
`;

export class Spinner extends React.Component {
  render() {
    return (
      <StyledSpinner spinnerOn={this.props.loading}>
        <div className='spinner'>Please Wait...</div>
        <div className='children'>{this.props.children}</div>
      </StyledSpinner>
    );
  }
}

Spinner.propTypes = {
  loading: PT.bool.isRequired,
}


const mapStateToProps = function (state) {
  return { loading: state.loading };
};

export default connect(mapStateToProps)(Spinner);