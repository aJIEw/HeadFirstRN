import {createStackNavigator,} from 'react-navigation';
import TestFetch from "../network/TestFetch";
import TestLayout from "../components/TestLayout";


const AppNav = createStackNavigator({
  Home: {screen: TestFetch},
  Profile: {screen: TestLayout},
});

export default AppNav;