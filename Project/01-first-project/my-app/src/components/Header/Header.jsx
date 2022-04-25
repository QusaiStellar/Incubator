import { NavLink } from 'react-router-dom';

import mainLogo from '../../img/logo.png';

import styles from './Header.module.css';


const Header = () => {
   
   return (
      <header className={styles.header}>
         <div className="container">
            <div className={styles.header_raw}>
               <NavLink to="/profile" className={styles.logo}><img src={mainLogo} alt="logo" /></NavLink>
               <input type="text" className={styles.search} />
               <div className={styles.icons}>Иконки</div>
            </div>
         </div>
      </header>
   );
};

export default Header;
