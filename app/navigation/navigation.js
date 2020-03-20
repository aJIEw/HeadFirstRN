import {createStackNavigator,} from 'react-navigation';
import TestFetch from "../network/TestFetch";
import TestFlatList from "../components/TestFlatList";


const AppNav = createStackNavigator({
  Home: {screen: TestFetch},
  Profile: {screen: TestFlatList},
});

export default AppNav;