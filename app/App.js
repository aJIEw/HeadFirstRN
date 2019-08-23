/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import NestedScrollView from "./others/NestedScrollView";


export default class App extends Component {

  // region 实例化期
  constructor(props) {
    super(props);

    console.log('constructor');

    this.state = {
      title: 'NestedScrollView Test'
    };
  }

  render() {
    console.log('render');

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.state.title}</Text>
        <NestedScrollView/>
      </View>
    );
  }

  componentDidMount() {
    console.log('componentDidMount');
  }
  // endregion

  // region 存在期
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return true;
  }

  // 每次 state 的修改都会造成调用
  // render()

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
  }
  // endregion

  // region 销毁期
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  // endregion
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50
  },
  title: {
    color: '#333',
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
  },

});
