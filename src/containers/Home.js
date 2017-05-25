import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>HOMEページです</h1>
        <Link to="todos">Todos</Link><br/>
        <Link to="yeah/B001">Sign Up</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
