import './index.css';
import App from './App';
import store from './Redux/state';
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
            />
         </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
   );

};

rerenderAllTree(store.getState());
store.subscriber(rerenderAllTree);