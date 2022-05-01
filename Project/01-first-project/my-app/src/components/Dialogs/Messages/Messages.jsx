import React from 'react';
import { Routes, Route } from 'react-router-dom';

import styles from './Messages.module.css';
import DialogContainer from './Dialog/DialogContainer';


const Messages = () => {

   return (
      <div className={styles.messages_wrapper}>
         <div className={styles.title}>
            <div className={styles.nickname}>Nickname</div>
            <div className={styles.status}>Status</div>
         </div>
         <Routes>
            <Route path=":id" element={<DialogContainer />} />
         </Routes>
      </div>
   );
};

export default Messages;
