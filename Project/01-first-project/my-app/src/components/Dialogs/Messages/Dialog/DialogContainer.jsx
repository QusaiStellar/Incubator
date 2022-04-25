import React from 'react';

import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../../Redux/dialogsPageReducer';

import Dialog from './Dialog';



const Dialog_container = (props) => {
   const addMessage = () => {
      props.store.dispatch(addMessageActionCreator());
   };
   const updateText = (text) => {
      props.store.dispatch(updateNewMessageTextActionCreator(text));

   };
   const state = props.store.getState().dialogsPage;

   return (
      <Dialog addMessageActionCreator={addMessage} updateNewMessageTextActionCreator={updateText} state={state} />
   );
};

export default Dialog_container;
