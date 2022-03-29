import styles from './Post.module.css';


const Post = () => {
   return (
      <div className={styles.post}>
         <div className={styles.post_avatar}><img src={require('../../img/avatar.jpg')} alt='avatar_post' /></div>

         <div className={styles.post_item}>
            <div className={styles.post_nickname}>Andrew Dobrik</div>
            <div className={styles.post_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, natus voluptatem. Quasi, distinctio nobis veniam debitis, minus voluptates, tenetur quis ut veritatis modi qui suscipit expedita. Nobis atque rem molestiae.</div>
         </div>
      </div>
   );
}

export default Post;
