import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from '../middlewares/promise'
import reducer from '../reducers';

const enhancer = compose(
  applyMiddleware(promiseMiddleware)
)


export default function configureStore(initialState) {

  const store = createStore(reducer, initialState, enhancer);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
