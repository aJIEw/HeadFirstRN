import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Root from "./app/redux/Root";
import TestKeyboardAvoidingView from "./app/components/TestKeyboardAvoidingView";

AppRegistry.registerComponent(appName, () => TestKeyboardAvoidingView);