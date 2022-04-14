import Dialog from './Dialog/Dialog';
import styles from './Messages.module.css';
import React from "react";
import { Routes, Route } from 'react-router-dom';


const Messages = (props) => {
   let newMessage = React.createRef();
   let addMessage = () => {
      let text = newMessage.current.value;
      alert(text);
   }
   return (
      <div className={styles.messages_wrapper}>
         <div className={styles.title}>
            <div className={styles.nickname}>Nickname</div>
            <div className={styles.status}>Status</div>
         </div>
         <Routes>
            <Route path=':id' element={<Dialog />} />
         </Routes>
         <div className={styles.message_send}>
            <textarea className={styles.textarea_message} ref={newMessage} />
            <button href="#" className={styles.send_btn} onClick={addMessage}>Send</button>
         </div>
      </div>
   );
}

export default Messages;
