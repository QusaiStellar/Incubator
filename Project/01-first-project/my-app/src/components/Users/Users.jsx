import React from 'react';

import styles from './Users.module.css';

const Users = (props) => {
   return (
      props.users.map(users =>
         <section className={styles.wrapper}>
            <div className={styles.avatar}>
               <div className={styles.userAvatar}>Avatar</div>
               <button className={styles.btn}>{users.followed ? 'Unfollow' : 'Follow'}</button>
            </div>
            <div className={styles.allInfo}>
               <div className={styles.userInfo}>
                  <p className={styles.fullName}>{users.fullName}</p>
                  <p className={styles.status}>{users.status}</p>
               </div>
               <div className={styles.location}>
                  <p className={styles.country}>{users.location.country}</p>
                  <p className={styles.city}>{users.location.city}</p>
               </div>
            </div>
         </section>
      )
   );
};

export default Users;