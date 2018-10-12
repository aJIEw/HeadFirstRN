import React, {Component} from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import {connect} from 'react-redux';

import {login} from "../redux/actions/login";

class Login extends Component {

  render() {
    return <View style={styles.container}>
      <Text style={styles.loginAlert}>请先登录！</Text>

      <Button title='登录'
              color={'#841584'}
              onPress={() => this.props.login('')}/>
    </View>;
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginAlert: {
    justifyContent: 'center',
    textAlign: 'center',
    paddingVertical: 55,
  },
});

function mapStateToProps(state) {
  return {
    authToken: state.authInfo
  }
}

export default connect(mapStateToProps, {login})(Login);