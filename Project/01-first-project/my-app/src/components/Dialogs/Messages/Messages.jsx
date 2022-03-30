import Dialog from './Dialog/Dialog';
import styles from './Messages.module.css';


const Messages = (props) => {
   return (
      <div className={styles.messages_wrapper}>
         <div className={styles.title}>
            <div>Nickname</div>
            <div>Status</div>
         </div>
         <Dialog />
         <div className={styles.message_send}>
            <textarea className={styles.textarea_message} />
         </div>
      </div>
   );
}

export default Messages;
