import React from 'react';
import AppNavigator from './AppNavigator';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import friendReducer from './reducers/index';

const store = createStore(friendReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <AppNavigator />
      </Provider>
    );
  }
}