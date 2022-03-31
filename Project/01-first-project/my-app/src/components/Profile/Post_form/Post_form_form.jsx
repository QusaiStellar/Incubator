import styles from './Post_form.module.css';


const Post_form = () => {
   return (

      <form className={styles.post_form}>
         <textarea className={styles.textarea_post}></textarea>
         <a href="#" className={styles.send_btn}><span>Send</span></a>
      </form>
   );
}

export default Post_form;
