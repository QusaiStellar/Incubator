import React from 'react';

import styles from './Avatar.module.css';


class Avatar extends React.Component {
   render = () => {
      return (

         <div className={styles.avatar} >
            <img src={require('../../img/avatar.jpg')} alt="avatar" />
         </div>

      );
   };
};

export default Avatar;
