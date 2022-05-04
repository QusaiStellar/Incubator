import { combineReducers, legacy_createStore as createStore } from 'redux';

import dialogsPageReducer from './dialogsPageReducer';
import profilePageReducer from './profilePageReducer';
import usersPageReducer from './usersPageReducer';

const reducers = combineReducers({
   profilePage: profilePageReducer,
   dialogsPage: dialogsPageReducer,
   usersPage: usersPageReducer,
});

const store = createStore(reducers);

export default store;

window.store = store;
