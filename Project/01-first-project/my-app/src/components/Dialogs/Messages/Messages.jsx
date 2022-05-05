import React from 'react';
import { Routes, Route } from 'react-router-dom';

import styles from './Messages.module.css';
import DialogContainer from './Dialog/DialogContainer';


class Messages extends React.Component {
   render = () => {

      return (
         <div className={styles.messages_wrapper}>
            <Routes>
               <Route path=":id" element={<DialogContainer />} />
            </Routes>
         </div>
      );
   };

};

export default Messages;
