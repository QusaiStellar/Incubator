import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../../Redux/dialogsPageReducer';
import React from "react";
import Dialog from './Dialog';



const Dialog_container = (props) => {
   let addMessage = () => {
      props.store.dispatch(addMessageActionCreator());
   }
   let updateText = (text) => {
      props.store.dispatch(updateNewMessageTextActionCreator(text));

   }
   const state = props.store.getState().dialogsPage;

   return (
      <Dialog addMessageActionCreator={addMessage} updateNewMessageTextActionCreator={updateText} state={state} />
   );
}

export default Dialog_container;
