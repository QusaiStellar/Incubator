import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import dialogsPageReducer from './dialogsPageReducer';
import profilePageReducer from './profilePageReducer';
import usersPageReducer from './usersPageReducer';
import userAuthReducer from './userAuthReducer';
import appReducer from './appReducer';

const reducers = combineReducers({
   profilePage: profilePageReducer,
   dialogsPage: dialogsPageReducer,
   usersPage: usersPageReducer,
   userAuth: userAuthReducer,
   app: appReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

window.store = store;
