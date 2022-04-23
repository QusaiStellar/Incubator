import styles from './Post_form.module.css';
import React from "react";



const Post_form = (props) => {

   let newPost = React.createRef();
   let addPost = () => {
      props.addPostActionCreator();
   }
   let updateText = () => {

      let text = newPost.current.value;
      props.updateNewPostTextActionCreator(text);

   }

   return (
      <div className={styles.post_form}>
         <textarea className={styles.textarea_post} ref={newPost} onChange={updateText} value={props.newPostText} />
         <button href="#" className={styles.send_btn} onClick={addPost}>Send</button>
      </div>
   );
}

export default Post_form;
