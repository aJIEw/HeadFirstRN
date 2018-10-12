import {Request_login_failure, Request_login_requesting, Request_login_success, Request_logout} from "../actions/login";
import {combineReducers} from "redux";


function data(state = '', actions) {
  switch(actions.type){
    case Request_login_success:
    case Request_login_failure:
      return actions.data;
    case Request_logout:
      return '';
    default:
      return state;
  }
}

let authInfo = combineReducers({data});

export default authInfo;