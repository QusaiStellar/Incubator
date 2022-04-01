
import styles from './Allinfo.module.css';


const Allinfo = () => {
   return (

      <div className={styles.allinfo}>
         <div className={styles.name}>Andrew Dobrik</div>
         <div className={styles.info}>
            <ul>
               <li>Date of birthday: 26 april</li>
               <li>City: Stolbtsy</li>
               <li>Education: BNTU '18</li>
               <li>Web-site: none</li>
            </ul>
         </div>
      </div>


   );
}

export default Allinfo;