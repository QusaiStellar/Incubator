import Background from './Background/Background';
import styles from './Content.module.css';
import Posts from './Posts/Posts';
import Post_form from './Post_form/Post_form_form';
import User from './User/User';


const Content = () => {
   return (
      <main>
         <Background />
         <User />
         <Post_form />
         <Posts />
      </main>
   );
}

export default Content;
