import styles from './Friend.module.css';
import avatar from '../../../img/avatar.jpg';
import { NavLink } from 'react-router-dom';


const Friend = () => {


   return (
      <NavLink to='/dialogs' className={styles.friend_wrapper}>
         <img src={avatar} alt="avatar" />
      </NavLink>
   );
}

export default Friend;

