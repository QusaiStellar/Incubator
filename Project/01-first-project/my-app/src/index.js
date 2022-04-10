import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, { subscriber, addPost, updateNewPostText } from './Redux/state';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';


let rerenderAllTree = (state) => {
   ReactDOM.render(
      <React.StrictMode>
         <BrowserRouter>

            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />

         </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
   );
};

rerenderAllTree(state);
subscriber(rerenderAllTree);
reportWebVitals();