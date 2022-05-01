import Messages from './Messages/Messages';
import Friends from './Friends/Friends';
import styles from './Dialogs.module.css';



const Dialogs = (props) => {

   const friends = props.friendsData.map(friend => <Friends id={friend.id} nickname={friend.nickname} />);

   return (
      <main>
         <div className={styles.dialogs_wrapper}>
            <div className={styles.friends_wrapper}>
               {friends}
            </div>

            <div className={styles.messages_wrapper}>
               <Messages />
            </div>
         </div>
      </main>
   );
};

export default Dialogs;
