import styles from './Avatar.module.css';


const Avatar = () => {
   return (

      <div className={styles.avatar}>
         <img src={require('../../img/avatar.jpg')} alt='avatar' />
      </div>

   );
}

export default Avatar;
