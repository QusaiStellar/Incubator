import Post from './Post/Post';
import styles from './Posts.module.css';



const Posts = () => {
   return (
      <div className={styles.posts}>
         <Post text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, voluptatum blanditiis, 
         rerum odio vel nisi quaerat necessitatibus vitae facilis perspiciatis itaque doloremque iure nam 
         porro illo in pariatur et ea?" like='10' dislike='2' />
         <Post text="Lorem ipsum dolor sit amet consectetur, adipisicing elit." like='20' dislike='4' />
         <Post text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ex cupiditate nulla, 
         nam maxime sint odio eligendi aliquid necessitatibus ut?" like='22' dislike='1' />
      </div>

   );
}

export default Posts;
