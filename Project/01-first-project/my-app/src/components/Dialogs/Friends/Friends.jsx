import React from 'react';
import { NavLink } from 'react-router-dom';

import avatar from './../../../assets/img/avatar.jpg';

import styles from './Friends.module.css';


const Friends = (props) => {
   return (
      <NavLink to={'/dialogs/' + props.id} className={styles.friends_wrapper}>
         <div className={styles.avatar}><img src={avatar} alt="avatar" /></div>
         <div className={styles.nickname}>{props.nickname}</div>
      </NavLink>
   );
};

export default Friends;
