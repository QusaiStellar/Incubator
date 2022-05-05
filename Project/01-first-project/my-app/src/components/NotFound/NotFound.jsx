import React from 'react';

import styles from './NotFound.module.css';


class NotFound extends React.Component {
   render = () => {
      return (
         <div className="container">
            <div className={styles.not_found}>Not Found 404</div>
         </div>
      );
   };

};

export default NotFound;
