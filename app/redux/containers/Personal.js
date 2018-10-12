import React, {Component} from "react";
import {View, StyleSheet, Text, Button} from "react-native";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux"

import verifyLogin from "../HOC/verifyLogin";
import {logout} from "../redux/actions/login";


class Personal extends Component{

  render() {
    return <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>

      <Button title='返回主页'
              color={'#091172'}
              onPress={() => Actions.pop()}/>

      <Button title='退出登录'
              color={'#27bd0e'}
              onPress={() => this.props.logout()}/>

    </View>;
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    color: '#222',
    marginVertical: 55,
  },
});


export default verifyLogin(connect(null, {logout})(Personal));