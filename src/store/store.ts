import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import Reducers from 'src/store/reducers';

const reducer = combineReducers(Reducers);

const enhancer = compose(applyMiddleware(ReduxThunk));
const store = createStore(reducer, enhancer);

export type RootState = ReturnType<typeof store.getState>;

export default store;
