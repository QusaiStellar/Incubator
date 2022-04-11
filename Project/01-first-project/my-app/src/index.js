import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Redux/state';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';


let rerenderAllTree = (store) => {

   ReactDOM.render(
      <React.StrictMode>
         <BrowserRouter>

            <App store={store} />

         </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
   );

};

rerenderAllTree(store);
store.subscriber(rerenderAllTree);
reportWebVitals();