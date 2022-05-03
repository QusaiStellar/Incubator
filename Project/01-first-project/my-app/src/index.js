import './index.css';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './Redux/redux-store';
import App from './App';

ReactDOM.render(
   <React.StrictMode>
      <BrowserRouter>
         <Provider store={store}>
            <App />
         </Provider>
      </BrowserRouter>
   </React.StrictMode>,
   document.getElementById('root')
);
