import React from 'react';

import styles from './User.module.scss';


class Status extends React.Component {

   state = {
      isActive: false,
      status: this.props.userStatus,
   };

   activateSetStatus = () => {
      this.setState({
         isActive: true,
      });
   };

   deactivateSetStatus = () => {
      this.setState({
         isActive: false,
      }
      );
      this.props.setStatus(this.state.status);
   };

   onStatusChange = (e) => {
      this.setState({
         status: e.currentTarget.value,
      });
   };

   render = () => {
      return (
         <div className={styles.statusArea}>
            {this.state.isActive
               ? <input onChange={this.onStatusChange} onBlur={this.deactivateSetStatus} autoFocus={true} value={this.state.status || ''} className={styles.setStatus} />
               : <p onClick={this.activateSetStatus} className={styles.userStatus}>{this.props.status || 'Set status'}</p>
            }
         </div>
      );
   };
}


export default Status;
