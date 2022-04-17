import Dialog from './Dialog/Dialog';
import styles from './Messages.module.css';
import React from "react";
import { Routes, Route } from 'react-router-dom';


const Messages = (props) => {

   return (
      <div className={styles.messages_wrapper}>
         <div className={styles.title}>
            <div className={styles.nickname}>Nickname</div>
            <div className={styles.status}>Status</div>
         </div>
         <Routes>
            <Route path=':id' element={<Dialog state={props.state} dispatch={props.dispatch} />} />
         </Routes>

      </div>
   );
}

export default Messages;
