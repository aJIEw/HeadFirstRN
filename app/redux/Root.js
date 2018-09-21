import React, {Component} from "react";
import Main from "./containers/Main";
import {Provider} from "react-redux";
import store from "./redux/store";


export default class Root extends Component {
  render() {
    return (
      // 第一层包装，连接组件和 store
      <Provider store={store}>
        <Main/>
      </Provider>
    )
  }
}
