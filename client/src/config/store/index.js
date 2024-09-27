import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
import { createBrowserHistory } from 'history';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootSaga from '../../sagas';
import * as actionCreators from '../../actions';
import rootReducer from '../../redux';

const persistConfig = {
  key: 'root',
  storage,
};

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, routerMiddleware(history)];
const persistedReducer = persistReducer(persistConfig, rootReducer(history));

if (process.env.NODE_ENV !== 'production') {
  const stateTransformer = (state) => state;
  middleware.push(createLogger({ stateTransformer }));
}
export default function configureStore(preloadedState) {
  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ actionCreators })
      : compose;
  const enhancer = composeEnhancers(applyMiddleware(...middleware, thunk));
  const store = createStore(persistedReducer, preloadedState, enhancer);
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return { store, persistor };
}
