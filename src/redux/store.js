import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger)),
);
if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./reducer', () => store.replaceReducer(rootReducer))
}
export default store;
