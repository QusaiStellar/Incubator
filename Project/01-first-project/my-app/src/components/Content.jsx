import styles from './Content.module.css';


const Content = () => {
   return (
      <main className={styles.content}>
         <div className={styles.contentBackground}>
            <img src={require('../img/main-bg.jpg')} alt='bg' />
         </div>
         <div className={styles.user}>
            <div className={styles.avatar}>
               <img src={require('../img/avatar.jpg')} alt='avatar' />
            </div>
            <div className={styles.allinfo}>
               <div className={styles.name}>Andrew Dobrik</div>
               <div className={styles.info}>
                  <ul>
                     <li>Date of birthday: 26 april</li>
                     <li>City: Stolbtsy</li>
                     <li>Education: BNTU '18</li>
                     <li>Web-site: none</li>
                  </ul>
               </div>
            </div>
         </div>
         <form className={styles.post_form}>
            <textarea className={styles.textarea_post}></textarea>
            <a href="#" className={styles.send_btn}>Send</a>
         </form>
         <div className={styles.posts}>
            <div className={styles.post}>
               <div className={styles.post_avatar}><img src={require('../img/avatar.jpg')} alt='avatar_post' /></div>

               <div className={styles.post_item}>
                  <div className={styles.post_nickname}>Andrew Dobrik</div>
                  <div className={styles.post_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, natus voluptatem. Quasi, distinctio nobis veniam debitis, minus voluptates, tenetur quis ut veritatis modi qui suscipit expedita. Nobis atque rem molestiae.</div>
               </div>
            </div>
            <div className={styles.post}>
               <div className={styles.post_avatar}><img src={require('../img/avatar.jpg')} alt='avatar_post' /></div>

               <div className={styles.post_item}>
                  <div className={styles.post_nickname}>Andrew Dobrik</div>
                  <div className={styles.post_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum magni libero distinctio aut quaerat, natus dolores! Error, pariatur saepe praesentium nisi perferendis enim illo mollitia natus nulla dicta ad officia.</div>
               </div>
            </div>
            <div className={styles.post}>
               <div className={styles.post_avatar}><img src={require('../img/avatar.jpg')} alt='avatar_post' /></div>

               <div className={styles.post_item}>
                  <div className={styles.post_nickname}>Andrew Dobrik</div>
                  <div className={styles.post_text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
                     aliquam facere ipsam, repellendus consequatur sapiente, recusandae sint
                     id perferendis porro ullam similique ipsum fugit distinctio nemo adipisci
                     aliquid corporis? Voluptatum.</div>
               </div>
            </div>
         </div>
      </main>
   );
}

export default Content;
