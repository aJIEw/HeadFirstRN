import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';

import textReducer from "./reducers/changeText";
import authInfo from "./reducers/login";


const allReducers = combineReducers({textReducer, authInfo});

let store = createStore(allReducers, applyMiddleware(thunkMiddleware));

export default store;