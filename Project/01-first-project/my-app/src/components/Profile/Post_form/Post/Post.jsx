import React from 'react';

import Preloader from '../../../common/Preloader/Preloader';

import avatar from './../../../../assets/img/avatar.jpg';

import styles from './Post.module.scss';


const Post = (props) => {
   if (!props.userProfile) {
      return <Preloader />;
   }
   return (
      <div className={styles.post}>
         <div className={styles.post_avatar}><img src={avatar} alt="avatar_post" /></div>
         <div className={styles.post_item}>
            <div className={styles.post_nickname}>{props.userProfile.fullName}</div>
            <div className={styles.post_text}>{props.text}</div>
            <div className={styles.like_dislike}>
               <div className={styles.like}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fillRule="evenodd" clipRule="evenodd" d="M12.7111 21H15.8769C17.7124 21 19.3123 19.7508 
                     19.7575 17.9701L21.3788 11.4851C21.6943 10.2228 20.7396 9 19.4385 9H14.5L15.8069 6.75968C16.7791
                      5.09303 15.5769 3 13.6474 3H12.5L8.63178 9.76943C8.54543 9.92052 8.50002 10.0915 8.50002 
                      10.2656V18.4648C8.50002 18.7992 8.66712 19.1114 8.94532 19.2969L10.4923 20.3282C11.1494
                       20.7662 11.9214 21 12.7111 21ZM4 9H5C6.10457 9 7 9.89543 7 11V18C7 19.1046 6.10457 20 5
                        20H4C2.89543 20 2 19.1046 2 18V11C2 9.89543 2.89543 9 4 9Z"
                        fill="#1E2124" />
                  </svg>
                  {props.like}</div>
               <div className={styles.dislike}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fillRule="evenodd" clipRule="evenodd" d="M11.2889 3H8.12309C6.28761 3 4.68768 4.24919 
                     4.24252 6.02986L2.62125 12.5149C2.30567 13.7772 3.26039 15 4.56153 15H9.49998L8.19312 
                     17.2403C7.22092 18.907 8.42309 21 10.3526 21H11.5L15.3682 14.2306C15.4546 14.0795 
                     15.5 13.9085 15.5 13.7344V5.53518C15.5 5.20083 15.3329 4.8886 15.0547 4.70313L13.5077 
                     3.6718C12.8506 3.23375 12.0786 3 11.2889 3ZM20 15H19C17.8954 15 17 14.1046 17 13V6C17 
                     4.89543 17.8954 4 19 4H20C21.1046 4 22 4.89543 22 6V13C22 14.1046 21.1046 15 20 15Z"
                        fill="#1E2124" />
                  </svg>
                  {props.dislike}</div>
            </div>
         </div>
      </div>
   );
};


export default Post;
