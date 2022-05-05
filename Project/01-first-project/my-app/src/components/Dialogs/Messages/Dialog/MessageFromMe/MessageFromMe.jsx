import React from 'react';

import styles from './MessageFromMe.module.css';


class MessageFromMe extends React.Component {
   render = () => {
      return (
         <div className={styles.message}>
            <span>{this.props.message}</span>
         </div>
      );
   };
};

export default MessageFromMe;
