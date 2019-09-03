import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from '../reducers';

// Note: for debugging purposes. feel free to remove 
const loggerMiddleware = createLogger();

export default function configStore(preloadedState) {
  const store = createStore(
    rootReducer, // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
      ),
    ),
  )

  return store
}