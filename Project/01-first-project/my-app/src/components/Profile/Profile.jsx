import React from 'react';

import styles from './Profile.module.scss';
import PostFormContainer from './Post_form/PostFormContainer';
import UserContainer from './User/UserContainer';


const Profile = () => {

   return (
      <main className={styles.profile} >
         <UserContainer />
         <PostFormContainer />
      </main>
   );
};

export default Profile;
