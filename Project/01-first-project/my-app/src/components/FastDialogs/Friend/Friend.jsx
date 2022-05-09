import React from 'react';
import { NavLink } from 'react-router-dom';

import avatar from '../../../assets/img/avatar.jpg';

import styles from './Friend.module.css';
const activeLink = ({ isActive }) => isActive ? styles.active : '';


class Friend extends React.Component {
   render = () => {

      return (
         <div className={styles.friend_wrapper}>
            <NavLink to={`/dialogs/${this.props.id}`} className={activeLink}  >
               <img src={avatar} alt="avatar" />
            </NavLink >
         </div>
      );
   };

};

export default Friend;

