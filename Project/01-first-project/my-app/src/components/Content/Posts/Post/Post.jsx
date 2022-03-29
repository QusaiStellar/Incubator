import styles from './Post.module.css';


const Post = (props) => {
   return (
      <div className={styles.post}>
         <div className={styles.post_avatar}><img src={require('../../img/avatar.jpg')} alt='avatar_post' /></div>

         <div className={styles.post_item}>
            <div className={styles.post_nickname}>Andrew Dobrik</div>
            <div className={styles.post_text}>{props.text}</div>
         </div>
      </div>
   );
}

export default Post;
