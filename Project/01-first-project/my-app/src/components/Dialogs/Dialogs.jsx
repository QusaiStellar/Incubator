import Messages from './Messages/Messages';
import Friends from './Friends/Friends';
import styles from './Dialogs.module.css';
const activeLink = ({ isActive }) => isActive ? styles.active : '';


const Dialogs = () => {

   let friendsData = [
      { id: 1, nickname: "Anasteisha Dobrinskaya", },
      { id: 2, nickname: "Vlad Bob", },
      { id: 3, nickname: "Max Somov", },
      { id: 4, nickname: "Yauheni Vasiluk", },
   ];

   let friends = friendsData.map(friend => <Friends id={friend.id} nickname={friend.nickname} />);

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
