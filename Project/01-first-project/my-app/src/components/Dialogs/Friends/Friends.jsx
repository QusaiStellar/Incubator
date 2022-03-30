import styles from './Friends.module.css';


const Friends = (props) => {
   return (
      <div>
         <a className={styles.friends_wrapper}>
            <div className={styles.avatar}>AVA</div>
            <div className={styles.nickname}>{props.nickname}</div>
         </a>
      </div>
   );
}

export default Friends;
