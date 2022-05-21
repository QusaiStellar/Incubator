import React from 'react';

import styles from './Login.module.scss';


const Login = (props) => {
   return (
      <div className={styles.wrapper}>
         <form className={styles.flex__wrapper}>
            <h3>Login Here</h3>

            <label for="username">Username</label>
            <input type="text" placeholder="Email or Phone" id="username" />

            <label for="password">Password</label>
            <input type="password" placeholder="Password" id="password" />

            <button>Log In</button>
         </form>
      </div>
   );
};

export default Login;