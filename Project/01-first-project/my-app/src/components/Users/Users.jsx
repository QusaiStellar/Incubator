import React from 'react';
import * as axios from 'axios';


import styles from './Users.module.css';

const Users = (props) => {

   if (props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
         .then(response => props.setUsers(response.data.items));
   }

   return (
      props.users.map(users =>
         <section className={styles.wrapper}>
            <div className={styles.avatar}>
               <div className={styles.userAvatar}>Avatar</div>
               <button onClick={users.followed ? () => { props.unfollow(users.id); } : () => { props.follow(users.id); }} className={styles.btn}>{users.followed ? 'Unfollow' : 'Follow'}</button>
            </div>
            <div className={styles.allInfo}>
               <div className={styles.userInfo}>
                  <p className={styles.fullName}>{users.fullName}</p>
                  <p className={styles.status}>{users.status}</p>
               </div>
               <div className={styles.location}>
                  <p className={styles.country}>Belarus</p>
                  <p className={styles.city}>Stowbtsy</p>
               </div>
            </div>
         </section >
      )
   );

};

export default Users;