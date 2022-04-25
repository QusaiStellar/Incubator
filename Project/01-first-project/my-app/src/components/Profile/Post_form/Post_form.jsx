import React from 'react';

import styles from './Post_form.module.css';



const Post_form = (props) => {

   const newPost = React.createRef();
   const addPost = () => {
      props.addPostActionCreator();
   };
   const updateText = () => {

      const text = newPost.current.value;
      props.updateNewPostTextActionCreator(text);

   };

   return (
      <div className={styles.post_form}>
         <textarea className={styles.textarea_post} ref={newPost} onChange={updateText} value={props.newPostText} />
         <button href="#" className={styles.send_btn} onClick={addPost}>Send</button>
      </div>
   );
};

export default Post_form;
