import styles from './Post_form.module.css';
import React from "react";



const Post_form = (props) => {


   let newPost = React.createRef();
   let addPost = () => {
      props.dispatch({ type: 'ADD-POST' })
   }
   let updateText = () => {
      let text = newPost.current.value;
      props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text });
   }

   return (

      <form className={styles.post_form}>
         <textarea className={styles.textarea_post} ref={newPost} onChange={updateText} value={props.newPostText} />
         <button href="#" className={styles.send_btn} onClick={addPost}>Send</button>
      </form>
   );
}

export default Post_form;
