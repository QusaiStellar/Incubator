import React from 'react';

import styles from './Login.module.css';


const Login = (props) => {
   return (
      <section className={styles.wrapper}>
         <h2 className={styles.title}>Для посещения данной страницы необходимо авторизоваться </h2>
         <a href="https://social-network.samuraijs.com/login" className={styles.button}>Authorization</a>
      </section>
   );
};

export default Login;