import React from 'react';

import Post from '../Post_form/Post/Post';

import styles from './Post_form.module.css';

const PostForm = (props) => {
   const postsElement = props.postsData.map(post => <Post id={post.id} key={post.id} text={post.text} like={post.like} dislike={post.dislike} />);
   const newPost = React.createRef();
   const addPost = () => {
      props.addPost();
   };
   const updateText = () => {
      const text = newPost.current.value;
      props.updateNewPostText(text);
   };

   return (
      <div>
         <div className={styles.post_form}>
            <textarea className={styles.textarea_post} ref={newPost} onChange={updateText} value={props.newPostText} />
            <button href="#" className={styles.send_btn} onClick={addPost}>Send</button>
         </div>
         <div className={styles.posts}>
            {postsElement}
         </div>
      </div >
   );
};

export default PostForm;
