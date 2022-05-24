import React from 'react';
import { NavLink } from 'react-router-dom';

import mainLogo from '../../assets/img/logo.png';

import styles from './Header.module.scss';


const Header = (props) => {
   return (
      <header className={styles.header} >
         <div className="container">
            <div className={styles.header_raw}>
               <NavLink to="/profile" className={styles.logo}><img src={mainLogo} alt="logo" /></NavLink>
               <input type="text" className={styles.search} />
               <div className={styles.icons}><span className={styles.login}>{props.isAuth ? props.login : ''}</span><NavLink to="/login"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3607 18.0108C20.3607 20.214 18.4891 22 16.1804 22H7.81965C5.5109 22 3.6393 20.214 3.6393 18.0108V13.133C3.6393 12.4248 3.34447 11.7456 2.81969 11.2448C1.60381 10.0845 1.76187 8.16205 3.15251 7.19692L9.54124 2.763C11.0071 1.74567 12.9929 1.74567 14.4588 2.763L20.8475 7.19691C22.2381 8.16205 22.3962 10.0845 21.1803 11.2448C20.6555 11.7456 20.3607 12.4248 20.3607 13.133V18.0108ZM12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z" fill="#fff" />
               </svg></NavLink>
               </div>
               <button onClick={props.logout}>logout</button>
            </div>
         </div>
      </header>
   );
};

export default Header;
