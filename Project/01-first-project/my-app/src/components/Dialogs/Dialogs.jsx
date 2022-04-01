import Messages from './Messages/Messages';
import Friends from './Friends/Friends';
import styles from './Dialogs.module.css';
const activeLink = ({ isActive }) => isActive ? styles.active : '';


const Dialogs = (props) => {

   let friends = props.friendsData.map(friend => <Friends id={friend.id} nickname={friend.nickname} />);

   return (
      <div className={styles.dialogs_wrapper}>
         <div className={styles.friends_wrapper}>
            {friends}
         </div>
         <div className={styles.messages_wrapper}>
            <Messages />
         </div>
      </div>
   );
}

export default Dialogs;
