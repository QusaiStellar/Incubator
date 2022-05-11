import React from 'react';

import styles from './FastDialogs.module.scss';
import Friend from './Friend/Friend';

class FastDialog extends React.Component {
   friends = this.props.state.map(friend => <Friend id={friend.id} nickname={friend.nickname} />);
   render = () => {
      return (
         <div className={styles.fastDialogs}>
            {this.friends}
         </div>
      );
   };
};

export default FastDialog;

