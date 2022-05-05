import React from 'react';

import styles from './Dialog.module.css';
import MessageFromFriend from './MessageFromFriend/MessageFromFriend';
import MessageFromMe from './MessageFromMe/MessageFromMe';



class Dialog extends React.Component {
   newMessage = React.createRef();
   messageFromMeElement = this.props.state.messagesFromMe.map(message => <MessageFromMe id={message.id} key={message.id} message={message.messageText} />);
   messageFromFriendElement = this.props.state.messagesFromFriend.map(message => <MessageFromFriend id={message.id} key={message.id} message={message.messageText} />);

   addMessage = () => {
      this.props.addMessage();
   };
   updateText = () => {
      const text = this.newMessage.current.value;
      this.props.updateNewMessageText(text);
   };
   render = () => {
      return (
         <div>
            <div className={styles.title}>
               <div className={styles.nickname}>Nickname</div>
               <div className={styles.status}>Status</div>
            </div>
            <div className={styles.dialog}>
               {this.messageFromFriendElement}
               {this.messageFromMeElement}
            </div>
            <div className={styles.message_send}>
               <textarea className={styles.textarea_message} onChange={this.updateText} ref={this.newMessage} value={this.props.state.newMessageText} placeholder="Enter your message" />
               <button href="#" className={styles.send_btn} onClick={this.addMessage} type="submit">Send</button>
            </div>
         </div >
      );
   };

};

export default Dialog;
