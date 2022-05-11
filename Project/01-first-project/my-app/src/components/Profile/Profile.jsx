import React from 'react';

import styles from './Profile.module.scss';
import User from './User/User';
import PostForm from './Post_form/PostForm';


const Profile = (props) => {
   return (
      <main className={styles.profile} >
         <User userProfile={props.userProfile} />
         <PostForm {...props} userProfile={props.userProfile} />
      </main>
   );
};

export default Profile;
