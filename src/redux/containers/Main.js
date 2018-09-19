import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import ChangeableText from "../components/ChangeableText";
import * as TextChanger from "../redux/actions/changeText";


class Main extends Component {

  render() {

    return (
      <View style={styles.container}>
        {/* 将从 state 映射而来的 props 传入 Component 中，state 发生变化则 props 的值也会相应地发生改变 */}
        <ChangeableText {...this.props}/>

        {/* 此时直接调用 props 上的 dispatcher */}
        <TouchableOpacity style={styles.changeText} onPress={() => this.props.actions.changeText('Hello', 'red')}>
          <Text>改变文字</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.actions.changeBack()}>
          <Text>恢复</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  changeText: {
    padding: 8,
  },
});

// 将 state 映射成 props，这里我们可以自由组合需要使用到的 state，只要是 store 树中存在的 state 都可以直接拿来使用
function mapStateToProps(state) {
  return {
    text: state.textReducer.text,
    color: state.textReducer.color,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TextChanger, dispatch)
  }
}

// 第二个参数对象中，如果是 Action Creator，则会被自动映射成组件上的 props 作为 dispatcher 使用
export default connect(mapStateToProps, mapDispatchToProps)(Main);