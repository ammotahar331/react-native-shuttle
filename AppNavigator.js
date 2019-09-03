import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './components/Home';
import Friends from './components/Friend';
import Dashboard from './components/dashboard';

const AppNavigator = createStackNavigator({
  Dashboard: { screen: Dashboard },
  Home: { screen: Home },
  Friends: { screen: Friends},
});

export default createAppContainer(AppNavigator);