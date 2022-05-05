import React from 'react';

import styles from './Profile.module.css';
import User from './User/User';
import PostFormContainer from './Post_form/PostFormContainer';


class Profile extends React.Component {
   
   render = () => {
      return (
         <main className={styles.profile} >
            <User />
            <PostFormContainer />
         </main>
      );
   };
};

export default Profile;
