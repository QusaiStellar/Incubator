import React from 'react';

import Messages from './Messages/Messages';
import Friends from './Friends/Friends';
import styles from './Dialogs.module.css';

const Dialogs = (props) => {
   const friends = props.friends.map(friend => <Friends key={friend.id} id={friend.id} nickname={friend.name} />);
   return (
      <main>
         <div className={styles.dialogs_wrapper}>
            <div className={styles.friends_wrapper}>
               {props.friends.length !== 0 ? friends : 'У вас нет друзей'}
            </div>
            {props.router.params !== Number ? <div className={styles.messages_wrapper}>
               <Messages />
            </div> : 'Выберите друга'}
         </div>
      </main>
   );
};

//поработать с params чтоб на /dialogs не показывался Messages

export default Dialogs;
