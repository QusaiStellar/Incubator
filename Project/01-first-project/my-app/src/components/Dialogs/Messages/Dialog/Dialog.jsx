import styles from './Dialog.module.css';
import MessageFromFriend from './MessageFromFriend/MessageFromFriend';
import MessageFromMe from './MessageFromMe/MessageFromMe';


const Dialog = (props) => {
   return (

      <div className={styles.dialog}>
         <MessageFromFriend />
         <MessageFromMe />
         <MessageFromMe />
         <MessageFromMe />
         <MessageFromFriend />
         <MessageFromFriend />
      </div>

   );
}

export default Dialog;
