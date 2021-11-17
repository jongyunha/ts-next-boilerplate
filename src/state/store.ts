import { createWrapper } from 'next-redux-wrapper';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';

const loggerMiddleWare =
  ({ dispatch, getState }: any) =>
  (next: any) =>
  (action: any) => {
    console.log('action', action);
    return next(action);
  };

const configureStore = () => {
  const middlewares = [thunk, loggerMiddleWare];
  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(reducers, enhancer);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;

// export const store = createStore(reducers, {}, applyMiddleware(thunk));
