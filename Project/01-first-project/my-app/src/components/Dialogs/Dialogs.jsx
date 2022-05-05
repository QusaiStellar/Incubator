import React from 'react';

import Messages from './Messages/Messages';
import Friends from './Friends/Friends';
import styles from './Dialogs.module.css';



class Dialogs extends React.Component {


   friends = this.props.friendsData.map(friend => <Friends id={friend.id} nickname={friend.nickname} />);

   render = () => {
      return (
         <main>
            <div className={styles.dialogs_wrapper}>
               <div className={styles.friends_wrapper}>
                  {this.friends}
               </div>
               <div className={styles.messages_wrapper}>
                  <Messages />
               </div>
            </div>
         </main>
      );
   };
};

export default Dialogs;
