import styles from './Friends.module.css';
import { NavLink } from 'react-router-dom';


const Friends = (props) => {
   return (
      <NavLink to={'/dialogs/' + props.id}>
         <div className={styles.friends_wrapper}>
            <div className={styles.avatar}>AVA</div>
            <div className={styles.nickname}>{props.nickname}</div>
         </div>
      </NavLink>
   );
}

export default Friends;
