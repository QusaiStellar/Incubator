import './index.css';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';

import store from './Redux/redux-store';
import App from './App';

const rerenderAllTree = (state) => {
   ReactDOM.render(
      <React.StrictMode>
         <BrowserRouter>
            <App
               state={state}
               dispatch={store.dispatch.bind(store)}
               store={store}
            />
         </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
   );

};

rerenderAllTree(store.getState());
store.subscribe(() => {
   const state = store.getState();
   rerenderAllTree(state);
});