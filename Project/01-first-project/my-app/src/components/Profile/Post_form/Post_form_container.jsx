import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profilePageReducer';
import Post_form from './Post_form';



const Post_form_container = (props) => {
   let addPost = () => {
      props.store.dispatch(addPostActionCreator());
   }
   let updateText = (text) => {

      props.store.dispatch(updateNewPostTextActionCreator(text));

   }

   return (
      <Post_form
         addPostActionCreator={addPost}
         updateNewPostTextActionCreator={updateText}
         newPostText={props.store.getState().profilePage.newPostText} />
   );
}

export default Post_form_container;
