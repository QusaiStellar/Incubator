import Background from './Background/Background';
import styles from './Profile.module.css';
import Posts from './Posts/Posts';
import Post_form from './Post_form/Post_form';
import User from './User/User';
import React from "react";


const Profile = (props) => {


   return (
      <main className={styles.profile}>
         {/*<Background />*/}
         <User />
         <Post_form addPost={props.addPost} />
         <Posts postsData={props.state.postsData} />
      </main>
   );
}

export default Profile;
