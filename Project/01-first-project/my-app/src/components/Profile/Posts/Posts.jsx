import Post from './Post/Post';
import styles from './Posts.module.css';



const Posts = (props) => {
   console.log(props);
   let postsElement = props.postsData.map(post => <Post id={post.id} text={post.text} like={post.like} dislike={post.dislike} />)

   return (
      <div className={styles.posts}>
         {postsElement}
      </div>

   );
}

export default Posts;
