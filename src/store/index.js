import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import RootReducer from '@Reducers';
import rootSaga from '@Sagas/index.js';

const middleware = [];
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);

const store = createStore(
  RootReducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);
sagaMiddleware.run(rootSaga);
export default store;
