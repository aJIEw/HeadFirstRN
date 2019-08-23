import React, {Component} from "react";
import {BackHandler, ToastAndroid} from 'react-native';

import {Actions, Router, Scene, Stack} from "react-native-router-flux";
import SplashScreen from "react-native-splash-screen";

import Personal from "../containers/Personal";
import Main from "../containers/Main";
import Login from "../containers/Login";


class AppRouter extends Component {
  render() {
    return <Router backAndroidHandler={onExitApp}>
      <Stack key='root'>
        <Scene key='main' component={Main} title={'Head First RN'}/>
        <Scene key='personal' component={Personal} title={'资料页'} back={true}/>
        <Scene key='login' component={Login} title={'登录'} back={true}/>
      </Stack>
    </Router>
  }

  componentDidMount() {
    // SplashScreen.hide();
    setTimeout(() => SplashScreen.hide(), 1000);
  }
}


let lastBackPressed = Date.now();
/**
 * Android 连点两次返回键退出
 * */
const onExitApp = () => {
  let current = Actions.currentScene.toString();
  if (current !== 'main') {
    Actions.pop();
    return true
  }
  if (lastBackPressed && Date.now() < lastBackPressed + 2000) {
    BackHandler.exitApp();
    return false;
  }
  ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
  lastBackPressed = Date.now();
  return true;
};

export default AppRouter;