import React, {Component} from "react";
import {connect} from 'react-redux';
import Login from "../containers/Login";


function mapStateToProps(state) {
  return {
    authToken: state.authInfo.data,
  };
}

const verifyLogin = WrappedComponent => connect(mapStateToProps)(
  class extends Component {
    render() {
      if (this.props.authToken) {
        return (<WrappedComponent {...this.props} />);
      } else {
        return (<Login/>);
      }
    }
  }
);

export default verifyLogin;