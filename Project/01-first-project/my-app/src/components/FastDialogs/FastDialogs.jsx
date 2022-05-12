import React from 'react';

import styles from './FastDialogs.module.scss';
import Friend from './Friend/Friend';

const FastDialog = (props) => {

   const friends = props.friends.map(friend => <Friend id={friend.id} nickname={friend.nickname} />);

   return (
      <div className={styles.fastDialogs}>
         {props.friends.length !== 0 ? { friends } : ''}
      </div>
   );
};

export default FastDialog;

