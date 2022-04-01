import styles from './Dialog.module.css';
import MessageFromFriend from './MessageFromFriend/MessageFromFriend';
import MessageFromMe from './MessageFromMe/MessageFromMe';


const Dialog = (props) => {
   return (


      
      < div className={styles.dialog} >
         <MessageFromFriend message='Lorem ipsum dolor sit amet, consectetur adipisicing elit.' />
         <MessageFromMe message='Lorem ipsum dolor sit amet.' />
         <MessageFromMe message='Lorem ipsum dolor sit amet consectetur adipisicing elit.Iure, alias ?' />
         <MessageFromMe message='Lorem ipsum dolor sit.' />
         <MessageFromFriend message='Lorem, ipsum dolor.Lorem, ipsum.' />
         <MessageFromFriend message='Lorem ipsum dolor sit amet consectetur adipisicing elit.Eligendi deserunt blanditiis quod cumque!
   Lorem, ipsum dolor.'/>
      </ div>

   );
}

export default Dialog;
