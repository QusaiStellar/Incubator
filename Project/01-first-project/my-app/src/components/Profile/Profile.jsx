import styles from './Profile.module.css';
import Posts from './Posts/Posts';
import User from './User/User';
import React from "react";
import Post_form_container from './Post_form/Post_form_container';


const Profile = (props) => {
   return (
      <main className={styles.profile}>
         <User />
         <Post_form_container store={props.store} />
         <Posts postsData={props.store.getState().profilePage.postsData} />
      </main>
   );
}

export default Profile;
