import React from 'react';

import styles from './MessageFromFriend.module.css';


class MessageFromFriend extends React.Component {
   render = () => {

      return (
         <div className={styles.message}>
            <span>{this.props.message}</span>
         </div>
      );
   };

};

export default MessageFromFriend;
