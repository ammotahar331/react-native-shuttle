import React from 'react';
import AppNavigator from './AppNavigator';
import { Provider } from 'react-redux';
import configStore from './redux/store/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ configStore() }>
        <AppNavigator />
      </Provider>
    );
  }
}