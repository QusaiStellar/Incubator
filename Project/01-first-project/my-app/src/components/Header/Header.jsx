import styles from './Header.module.css';
import mainLogo from '../../img/logo.png';
import { NavLink } from 'react-router-dom';


const Header = () => {
   return (
      <header className={styles.header}>
         <div className='container'>
            <div className={styles.header_raw}>
               <NavLink to='/profile' className={styles.logo}><img src={mainLogo} alt="logo" /></NavLink>
               <div className={styles.icons}>Иконки</div>
               <input type="text" className={styles.search} />
            </div>
         </div>
      </header>
   );
}

export default Header;
