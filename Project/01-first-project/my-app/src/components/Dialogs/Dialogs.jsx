import Messages from './Messages/Messages';
import Friends from './Friends/Friends';
import styles from './Dialogs.module.css';
import { Route, Routes } from 'react-router-dom';

const activeLink = isActive => isActive ? styles.active : '';


const Dialogs = (props) => {

   let friends = props.state.friendsData.map(friend => <Friends id={friend.id} nickname={friend.nickname} className={activeLink} />);

   return (
      <div className={styles.dialogs_wrapper}>
         <div className={styles.friends_wrapper}>
            {friends}
         </div>
         <div className={styles.messages_wrapper}>
            <Routes>
               <Route path='/*' element={<Messages />} />
            </Routes>
         </div>
      </div>
   );
}

export default Dialogs;
