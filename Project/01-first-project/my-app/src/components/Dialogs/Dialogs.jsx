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
   ]

   return (
      <div className={styles.dialogs_wrapper}>
         <div className={styles.friends_wrapper}>
            <Friends id={friendsData[0].id} nickname={friendsData[0].nickname} />
            <Friends id={friendsData[1].id} nickname={friendsData[1].nickname} />
            <Friends id={friendsData[2].id} nickname={friendsData[2].nickname} />
            <Friends id={friendsData[3].id} nickname={friendsData[3].nickname} />
         </div>
         <div className={styles.messages_wrapper}>
            <Messages />
         </div>
      </div>
   );
}

export default Dialogs;
