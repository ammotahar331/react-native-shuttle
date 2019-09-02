import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './Components/Home';
import Friends from './Components/Friend';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Friends: { screen: Friends},
});

export default createAppContainer(AppNavigator);