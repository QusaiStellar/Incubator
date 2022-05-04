import React from 'react';

import styles from './Dialog.module.css';
import MessageFromFriend from './MessageFromFriend/MessageFromFriend';
import MessageFromMe from './MessageFromMe/MessageFromMe';



const Dialog = (props) => {
   const newMessage = React.createRef();
   const addMessage = () => {
      props.addMessage();
   };
   const updateText = () => {
      const text = newMessage.current.value;
      props.updateNewMessageText(text);
   };
   const messageFromMeElement = props.state.messagesFromMe.map(message => <MessageFromMe id={message.id} key={message.id} message={message.messageText} />);
   const messageFromFriendElement = props.state.messagesFromFriend.map(message => <MessageFromFriend id={message.id} key={message.id} message={message.messageText} />);

   return (
      <div>
         <div className={styles.title}>
            <div className={styles.nickname}>Nickname</div>
            <div className={styles.status}>Status</div>
         </div>
         <div className={styles.dialog}>
            {messageFromFriendElement}
            {messageFromMeElement}
         </div>
         <div className={styles.message_send}>
            <textarea className={styles.textarea_message} onChange={updateText} ref={newMessage} value={props.state.newMessageText} placeholder="Enter your message" />
            <button href="#" className={styles.send_btn} onClick={addMessage} type="submit">Send</button>
         </div>
      </div>
   );
};

export default Dialog;
