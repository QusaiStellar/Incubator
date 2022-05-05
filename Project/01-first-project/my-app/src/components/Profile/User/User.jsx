import React from 'react';

import Allinfo from './Allinfo/Allinfo';
import Avatar from './Avatar/Avatar';
import styles from './User.module.css';


class User extends React.Component {
   render = () => {
      return (
         <div className={styles.user} >
            <Avatar />
            <Allinfo />
         </div>
      );
   };
};

export default User;
