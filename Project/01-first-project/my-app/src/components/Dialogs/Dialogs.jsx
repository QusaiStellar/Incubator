import Messages from './Messages/Messages';
import Friends from './Friends/Friends';
import styles from './Dialogs.module.css';


const Dialogs = () => {
   return (
      <div className={styles.dialogs_wrapper}>
         <div className={styles.friends_wrapper}>
            <Friends nickname='Anasteisha Dobrinskaya' />
            <Friends nickname='Vlad Bob' />
            <Friends nickname='Max Somov' />
            <Friends nickname='Mather' />
         </div>
         <div className={styles.messages_wrapper}>
            <Messages />
         </div>
      </div>
   );
}

export default Dialogs;
