import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';

import textReducer from "./reducers/changeText";
import authInfo from "./reducers/login";


const allReducers = combineReducers({textReducer, authInfo});

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

let store = createStore(allReducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;