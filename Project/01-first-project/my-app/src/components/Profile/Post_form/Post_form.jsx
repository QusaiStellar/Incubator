import styles from './Post_form.module.css';
import React from "react";



const Post_form = (props) => {
   let newPost = React.createRef();
   let addPost = () => {
      let text = newPost.current.value;
      props.addPost(text);
      newPost.current.value = '';
   }
   return (

      <form className={styles.post_form}>
         <textarea className={styles.textarea_post} ref={newPost}></textarea>
         <a href="#" className={styles.send_btn} onClick={addPost}><span>Send</span></a>
      </form>
   );
}

export default Post_form;
