import styles from './MessageFromFriend.module.css';


const MessageFromFriend = (props) => {
   return (
      <div className={styles.message}>
         <span>{props.message}</span>
      </div>
   );
}

export default MessageFromFriend;
