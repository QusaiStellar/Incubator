import React from 'react';

import Post from '../Post_form/Post/Post';

import styles from './Post_form.module.css';



class PostForm extends React.Component {

   postsElement = this.props.postsData.map(post => <Post id={post.id} key={post.id} text={post.text} like={post.like} dislike={post.dislike} />);
   newPost = React.createRef();

   addPost = () => {
      this.props.addPost();
   };

   updateText = () => {
      const text = this.newPost.current.value;
      this.props.updateNewPostText(text);
   };

   render = () => {
      return (
         <div>
            <div className={styles.post_form}>
               <textarea className={styles.textarea_post} ref={this.newPost} onChange={this.updateText} value={this.props.newPostText} />
               <button href="#" className={styles.send_btn} onClick={this.addPost}>Send</button>
            </div>
            <div className={styles.posts}>
               {this.postsElement}
            </div>
         </div >
      );
   };
};

export default PostForm;
