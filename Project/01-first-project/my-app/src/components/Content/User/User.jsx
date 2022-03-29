import Allinfo from './Allinfo/Allinfo';
import Avatar from './Avatar/Avatar';
import styles from './User.module.css';


const User = () => {
   return (

      <div className={styles.user}>
         <Avatar />
         <Allinfo />
      </div>

   );
}

export default User;
