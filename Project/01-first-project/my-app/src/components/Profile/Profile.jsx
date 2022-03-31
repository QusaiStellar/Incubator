import Background from './Background/Background';
import styles from './Profile.module.css';
import Posts from './Posts/Posts';
import Post_form from './Post_form/Post_form_form';
import User from './User/User';


const Profile = () => {
   return (
      <div className='container'>
         <main className={styles.profile}>
            {/*<Background />*/}
            <User />
            <Post_form />
            <Posts />
         </main>
      </div>
   );
}

export default Profile;
