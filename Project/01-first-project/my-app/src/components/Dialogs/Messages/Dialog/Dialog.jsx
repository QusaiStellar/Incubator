import styles from './Dialog.module.css';
import MessageFromFriend from './MessageFromFriend/MessageFromFriend';
import MessageFromMe from './MessageFromMe/MessageFromMe';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../../Redux/state';
import React from "react";



const Dialog = (props) => {
   let newMessage = React.createRef();
   let addMessage = () => {
      props.dispatch(addMessageActionCreator());
   }
   let updateText = () => {
      let text = newMessage.current.value;
      props.dispatch(updateNewMessageTextActionCreator(text));

   }
   let messageFromMeElement = props.state.messagesFromMe.map(message => <MessageFromMe id={message.id} message={message.messageText} />)
   let messageFromFriendElement = props.state.messagesFromFriend.map(message => <MessageFromFriend id={message.id} message={message.messageText} />)

   return (
      <div>
         < div className={styles.dialog} >
            {messageFromFriendElement}
            {messageFromMeElement}
         </ div>
         <div className={styles.message_send}>
            <textarea className={styles.textarea_message} onChange={updateText} ref={newMessage} value={props.state.newMessageText} placeholder='Enter your message' />
            <button href="#" className={styles.send_btn} onClick={addMessage}>Send</button>
         </div>
      </div>
   );
}

export default Dialog;
