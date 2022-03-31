import styles from './Background.module.css';


const Background = () => {
   return (
      
      <div className={styles.background}>
         <img src={require('../img/main-bg.jpg')} alt='bg' />
      </div>

   );
}

export default Background;
