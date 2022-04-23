import './index.css';
import App from './App';
import store from './Redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';

let rerenderAllTree = (state) => {
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
   let state = store.getState();
   rerenderAllTree(state);
});