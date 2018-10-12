import React, {Component} from "react";
import {Router, Scene, Stack} from "react-native-router-flux";
import Personal from "../containers/Personal";
import Main from "../containers/Main";
import Login from "../containers/Login";


class AppRouter extends Component {
  render() {
    return <Router>
      <Stack>
        <Scene key='root' component={Main} />
        <Scene key='personal' component={Personal} />
        <Scene key='login' component={Login} />
      </Stack>
    </Router>
  }
}

export default AppRouter;