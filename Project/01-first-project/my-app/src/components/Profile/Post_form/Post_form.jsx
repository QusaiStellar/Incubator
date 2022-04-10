import styles from './Post_form.module.css';
import React from "react";



const Post_form = (props) => {

   let newPost = React.createRef();
   let addPost = () => {
      props.addPost();
   }
   let updateText = () => {
      let text = newPost.current.value;
      props.updateNewPostText(text);
   }
   return (

      <form className={styles.post_form}>
         <textarea className={styles.textarea_post} ref={newPost} onChange={updateText} value={props.newPostText}/>
         <a href="#" className={styles.send_btn} onClick={addPost}><span>Send</span></a>
      </form>
   );
}

export default Post_form;
