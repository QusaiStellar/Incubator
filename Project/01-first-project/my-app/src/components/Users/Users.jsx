import React from 'react';
import * as axios from 'axios';

import userImg from '../../img/avatar.jpg';

import styles from './Users.module.css';

class Users extends React.Component {


   componentDidMount() {
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
         .then(response => this.props.setUsers(response.data.items));
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
         .then(response => this.props.totalUsers(response.data.totalCount));
   }



   render = () => {

      const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.usersPerPage);
      for (let i = 1; i <= pagesCount; i++) {
         this.props.pages(i);
      }

      return (
         <div className={styles.wrapper}>
            <ul>

            </ul>
            {this.props.users.map(users =>
               <section className={styles.usersWrapper}>
                  <div className={styles.avatar}>
                     <img src={users.photos.small != null ? users.photos.small : userImg} className={styles.userAvatar} alt="avatar" />
                     <button onClick={users.followed ? () => { this.props.unfollow(users.id); } : () => { this.props.follow(users.id); }} className={styles.btn}>{users.followed ? 'Unfollow' : 'Follow'}</button>
                  </div>
                  <div className={styles.allInfo}>
                     <div className={styles.userInfo}>
                        <p className={styles.fullName}>{users.name}</p>
                        <p className={styles.status}>{users.status}</p>
                     </div>
                     <div className={styles.location}>
                        <p className={styles.country}>Belarus</p>
                        <p className={styles.city}>Stowbtsy</p>
                     </div>
                  </div>
               </section >
            )
            }
         </div>
      );
   };
};

export default Users;