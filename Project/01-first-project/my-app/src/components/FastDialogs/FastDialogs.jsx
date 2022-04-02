import { NavLink } from 'react-router-dom';
import styles from './FastDialogs.module.css';
import Friend from './Friend/Friend';

const FastDialog = (props) => {
   let friends = props.state.map(friend => <Friend id={friend.id} nickname={friend.nickname} />);

   return (
      <div className={styles.fast_dialogs}>
         {friends}
      </div>
   );
}

export default FastDialog;

