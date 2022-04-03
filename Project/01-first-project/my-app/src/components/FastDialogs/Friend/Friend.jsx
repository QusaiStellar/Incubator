import styles from './Friend.module.css';
import avatar from '../../../img/avatar.jpg';
import { NavLink } from 'react-router-dom';
const activeLink = ({ isActive }) => isActive ? styles.active : '';


const Friend = (props) => {

   return (
      <NavLink to={`/dialogs/${props.id}`} className={`${activeLink} ${styles.friend_wrapper}`} >
         <img src={avatar} alt="avatar" />
      </NavLink >
   );
}

export default Friend;

