import React from 'react';

import styles from './Profile.module.scss';
import PostForm from './Post_form/PostForm';
import User from './User/User';


const Profile = (props) => {

   return (
      <main className={styles.profile} >
         <User userProfile={props.userProfile} setStatus={props.setStatus} userStatus={props.userStatus} />
         <PostForm  {...props} />
      </main>
   );
};

export default Profile;
