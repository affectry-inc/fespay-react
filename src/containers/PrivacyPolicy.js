import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class PrivacyPolicy extends Component {
  render() {
    return (
      <div>
        <h1>プライバシーポリシー</h1>
        <Link to="todos">Todos</Link><br/>
        <Link to="yeah/a001">Sign Up</Link>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivacyPolicy)
