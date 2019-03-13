import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledSpinner = styled.div`
  .spinner {
    display: ${props => (props.spinnerOn ? "block" : "none")};
  }
`;

export class Spinner extends React.Component {
  render() {
    return (
      <StyledSpinner spinnerOn={this.props.loading}>
        <div className='spinner'>Please Wait...</div>
      </StyledSpinner>
    );
  }
}


const mapStateToProps = function (state) {
  return { loading: state.loading };
};

export default connect(mapStateToProps)(Spinner);