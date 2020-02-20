import { compose, applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

const composeEnhancer =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
      })
    : compose;

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const enhancers = [applyMiddleware(...middleware)];

export const store = createStore(composeEnhancer(...enhancers));
const configureStore = () => {
  return store;
};
export default configureStore;
