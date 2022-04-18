import styles from './Post_form.module.css';
import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profilePageReducer';



const Post_form = (props) => {


   let newPost = React.createRef();
   let addPost = () => {
      props.dispatch(addPostActionCreator());
   }
   let updateText = () => {
      let text = newPost.current.value;
      props.dispatch(updateNewPostTextActionCreator(text));
   }

   return (
      <div className={styles.post_form}>
         <textarea className={styles.textarea_post} ref={newPost} onChange={updateText} value={props.newPostText} />
         <button href="#" className={styles.send_btn} onClick={addPost}>Send</button>
      </div>
   );
}

export default Post_form;
