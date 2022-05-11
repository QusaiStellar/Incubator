import React from 'react';

import Post from './Post/Post';

import styles from './PostForm.module.scss';

const PostForm = (props) => {
   const newPost = React.createRef();
   const postsElement = props.postsData.map(post => <Post id={post.id} key={post.id} text={post.text} like={post.like} dislike={post.dislike}
      userProfile={props.userProfile} />);
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
            <button className={styles.send_btn} onClick={addPost}>Send</button>
         </div>
         <div className={styles.posts}>
            {postsElement}
         </div>
      </div >
   );
};

export default PostForm;
