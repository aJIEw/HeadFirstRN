import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';

import textReducer from "./reducers/changeText";


const allReducers = combineReducers({textReducer});

let store = createStore(allReducers, applyMiddleware(thunkMiddleware));

export default store;