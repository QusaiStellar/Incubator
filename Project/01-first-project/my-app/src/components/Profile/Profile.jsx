import React from 'react';

import styles from './Profile.module.css';
import User from './User/User';
import PostFormContainer from './Post_form/PostFormContainer';


const Profile = () => {
   return (
      <main className={styles.profile}>
         <User />
         <PostFormContainer />
      </main>
   );
};

export default Profile;
