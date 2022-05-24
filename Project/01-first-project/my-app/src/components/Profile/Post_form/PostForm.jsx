import React from 'react';
import { useForm } from 'react-hook-form';

import Post from './Post/Post';

import styles from './PostForm.module.scss';

const PostForm = (props) => {

   const {
      register,
      handleSubmit,
      reset,
   } = useForm({
      mode: 'onBlur',
   });

   const onSubmit = data => {
      const { postText } = data;
      props.addPost(postText);
      reset();
   };

   const postsElement = props.postsData.map(post => <Post id={post.id} key={post.id} text={post.text} like={post.like} dislike={post.dislike}
      userProfile={props.userProfile} />);


   return (
      <div>
         <form className={styles.post_form} onSubmit={handleSubmit(onSubmit)}>
            <textarea placeholder="Enter your post text" className={styles.textarea_post} value={props.newPostText} {...register('postText',)} />
            <input type="submit" value="send" className={styles.send_btn} />
         </form>
         <div className={styles.posts}>
            {postsElement}
         </div>
      </div >
   );
};

export default PostForm;
