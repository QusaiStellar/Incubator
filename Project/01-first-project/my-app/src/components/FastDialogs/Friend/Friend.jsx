import { NavLink } from 'react-router-dom';

import avatar from '../../../img/avatar.jpg';

import styles from './Friend.module.css';
const activeLink = ({ isActive }) => isActive ? styles.active : '';


const Friend = (props) => {

   return (
      <div className={styles.friend_wrapper}>
         <NavLink to={`/dialogs/${props.id}`} className={activeLink}  >
            <img src={avatar} alt="avatar" />
         </NavLink >
      </div>
   );
};

export default Friend;

