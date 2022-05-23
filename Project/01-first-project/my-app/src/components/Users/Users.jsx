import React from 'react';
import { NavLink } from 'react-router-dom';

import userImg from '../../assets/img/avatar.jpg';

import styles from './Users.module.scss';

const Users = (props) => {

   const pages = [];
   const pagesCount = Math.ceil(props.totalUsersCount / props.usersPerPage);
   for (let i = 1; i < pagesCount; i++) {
      pages.push(i);
   }
   const curP = props.selectedPage;
   const curPF = ((curP - 5) < 0) ? 0 : curP - 5;
   const curPL = ((curP - 5) < 0) ? 10 : curP + 5;
   const slicedPages = pages.slice(curPF, curPL);

   return (
      <div className={styles.wrapper}>
         <ul className={styles.pages}>
            {slicedPages.map(p => {
               return <li onClick={() => { props.pageChanged(p); }} className={props.selectedPage === p && styles.selectedPage}>{p}</li>;
            })}
         </ul>
         {props.users.map(users =>
            <section className={styles.usersWrapper}>
               <div className={styles.avatar}>
                  <NavLink to={`/profile/${users.id}`}> <img src={users.photos.small != null ? users.photos.small : userImg} className={styles.userAvatar} alt="avatar" /></NavLink>
                  <button disabled={props.isRequest.some(el => el === users.id)} onClick={users.followed ?
                     () => {
                        props.unfollow(users.id);
                     } : () => {
                        props.follow(users.id);
                     }} className={styles.btn}>
                     {users.followed ? 'Unfollow' : 'Follow'}
                  </button>
               </div>
               <div className={styles.allInfo}>
                  <div className={styles.userInfo}>
                     <NavLink to={`/profile/${users.id}`}> <p className={styles.fullName}>{users.name}</p></NavLink>
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
      </div >
   );
};

export default Users;