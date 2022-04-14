import styles from './Profile.module.css';
import Posts from './Posts/Posts';
import Post_form from './Post_form/Post_form';
import User from './User/User';
import React from "react";


const Profile = (props) => {

   return (
      <main className={styles.profile}>
         <User />
         <Post_form dispatch={props.dispatch} newPostText={props.state.newPostText} />
         <Posts postsData={props.state.postsData} />
      </main>
   );
}

export default Profile;
