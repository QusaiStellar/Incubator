import Post from './Post/Post';
import styles from './Posts.module.css';



const Posts = () => {

   let postData = [
      {
         id: 1, text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, voluptatum blanditiis, rerum odio vel nisi quaerat necessitatibus vitae facilis perspiciatis itaque doloremque iure nam porro illo in pariatur et ea?',
         like: 10, dislike: 2,
      },
      {
         id: 2, text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
         like: 20, dislike: 4,
      },
      {
         id: 3, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ex cupiditate nulla, nam maxime sint odio eligendi aliquid necessitatibus ut?',
         like: 22, dislike: 1,
      },
   ]

   return (
      <div className={styles.posts}>
         <Post id={postData[0].id} text={postData[0].text} like={postData[0].like} dislike={postData[0].dislike} />
         <Post id={postData[1].id} text={postData[1].text} like={postData[1].like} dislike={postData[1].dislike} />
         <Post id={postData[2].id} text={postData[2].text} like={postData[2].like} dislike={postData[2].dislike} />
      </div>

   );
}

export default Posts;
