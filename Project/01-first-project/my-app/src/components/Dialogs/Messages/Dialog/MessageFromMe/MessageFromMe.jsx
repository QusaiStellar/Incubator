import styles from './MessageFromMe.module.css';


const MessageFromMe = (props) => {
   return (
      <div className={styles.message}>
         <span>{props.message}</span>
      </div>
   );
};

export default MessageFromMe;
