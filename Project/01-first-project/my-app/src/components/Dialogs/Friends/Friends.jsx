import React from 'react';
import { NavLink } from 'react-router-dom';

import avatar from '../../../img/avatar.jpg';

import styles from './Friends.module.css';


class Friends extends React.Component {
   render = () => {
      return (
         <NavLink to={'/dialogs/' + this.props.id} className={styles.friends_wrapper}>
            <div className={styles.avatar}><img src={avatar} alt="avatar" /></div>
            <div className={styles.nickname}>{this.props.nickname}</div>
         </NavLink>
      );
   };
};

export default Friends;
