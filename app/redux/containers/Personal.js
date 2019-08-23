import React, {Component} from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux"

import verifyLogin from "../HOC/verifyLogin";
import {logout} from "../redux/actions/login";


class Personal extends Component{

  render() {
    return <View style={styles.container}>
      <Text style={styles.title}>{"HOC 是 React 中的一种模式，通过 HOC 我们可以方便地在多个组件中注入一些通用的功能，" +
      "这样就可以避免重复的代码逻辑。一个 HOC 函数接收一个组件作为参数，并且返回一个新的组件，" +
      "通过 HOC 函数我们可以为组件添加额外的功能或者数据。"}</Text>

      <Button title='返回主页'
              color={'#111'}
              onPress={() => Actions.pop()}/>

      <Button title='退出登录'
              color={'red'}
              onPress={() => this.props.logout()}/>

    </View>;
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    paddingHorizontal: 12,
  },
  title: {
    color: '#222',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 24,
    marginVertical: 55,
  },
});


export default verifyLogin(connect(null, {logout})(Personal));