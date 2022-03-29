import styles from './Header.module.css';

const Header = () => {
   return (
      <header className={styles.header}>
         <div className={styles.logo}>It's my Logo!</div>
      </header>
   );
}

export default Header;
