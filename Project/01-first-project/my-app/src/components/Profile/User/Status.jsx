import React from 'react';

import styles from './User.module.scss';


class Status extends React.Component {

   state = {
      isActive: false,

   };

   activateSetStatus = () => {
      this.setState({
         isActive: true,
      });
   };

   deactivateSetStatus = () => {
      this.setState({
         isActive: false,
      });
   };

   render = () => {
      return (
         <div className={styles.statusArea}>
            {this.state.isActive
               ? <input onBlur={this.deactivateSetStatus} autoFocus={true} value={this.props.status} className={styles.setStatus} />
               : <p onClick={this.activateSetStatus} className={styles.userStatus}>{this.props.status}</p>
            }
         </div>
      );
   };
}


export default Status;
