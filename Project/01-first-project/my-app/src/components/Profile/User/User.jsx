import React from 'react';

import Preloader from '../../common/Preloader/Preloader';

import avatar from './../img/avatar.jpg';
import styles from './User.module.css';

const User = (props) => {
   if (!props.userProfile) {
      return <Preloader />;
   }

   return (
      <div className={styles.user} >
         <div className={styles.avatar} >
            <img src={props.userProfile.photos.large != null ? props.userProfile.photos.large : avatar} alt="avatar" />
         </div>
         <div className={styles.allinfo} >
            <div className={styles.name}>{props.userProfile.fullName}</div>
            <div className={styles.info}>
               <ul>
                  <li>Date of birthday: 26 april</li>
                  <li>City: Stolbtsy</li>
                  <li>Education: BNTU '18</li>
                  <li>Web-site: none</li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default User;
