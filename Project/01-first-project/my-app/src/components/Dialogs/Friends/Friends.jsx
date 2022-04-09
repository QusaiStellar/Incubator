import styles from './Friends.module.css';
import { NavLink } from 'react-router-dom';
import avatar from '../../../img/avatar.jpg';


const Friends = (props) => {
   return (
      <NavLink to={'/dialogs/' + props.id} className={styles.friends_wrapper}>
         <div className={styles.avatar}><img src={avatar} alt="avatar" /></div>
         <div className={styles.nickname}>{props.nickname}</div>
      </NavLink>
   );
}

export default Friends;
