import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index.js';
import ReduxThunk from 'redux-thunk';

const store = createStore(
  reducers,
  applyMiddleware(ReduxThunk)
);

export default store