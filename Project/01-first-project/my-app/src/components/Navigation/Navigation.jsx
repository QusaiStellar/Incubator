import styles from './Navigation.module.css';


const Navigation = () => {
   return (
      <nav className={styles.navigation}>
         <ul>
            <li><a>Profile</a></li>
            <li><a>Messages</a></li>
            <li><a>News</a></li>
            <li><a>Musics</a></li>
            <li><a>Settings</a></li>
         </ul>
      </nav>

   );
}

export default Navigation;
