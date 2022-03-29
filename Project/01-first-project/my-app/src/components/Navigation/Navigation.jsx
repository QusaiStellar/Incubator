import styles from './Navigation.module.css';


const Navigation = () => {
   return (
      <nav className={styles.navigation}>
         <ul>
            <li><a className={styles.active}><span>Profile</span>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 
                  14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11ZM12 21C15.866 21 19 19.2091 
                  19 17C19 14.7909 15.866 13 12 13C8.13401 13 5 14.7909 5 17C5 19.2091 8.13401 21 12 21Z"
                     fill="#1E2124" />
               </svg>
            </a></li>
            <li><a><span>Messages</span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd" clip-rule="evenodd" d="M6 3C3.79086 3 2 4.79086 2 7V17C2 19.2091
                3.79086 21 6 21H18C20.2091 21 22 19.2091 22 17V7C22 4.79086 20.2091 3 18 3H6ZM6.41603 
                7.37592C6.07138 7.14616 5.60573 7.23929 5.37597 7.58393C5.1462 7.92858 5.23933 8.39423 
                5.58398 8.624L9.36518 11.1448C10.9607 12.2085 13.0393 12.2085 14.6348 11.1448L18.416 
                8.624C18.7607 8.39423 18.8538 7.92858 18.624 7.58393C18.3943 7.23929 17.9286 7.14616 
                17.584 7.37592L13.8028 9.89672C12.7111 10.6245 11.2889 10.6245 10.1972 9.89672L6.41603 
                7.37592Z" fill="#1E2124" />
            </svg>
            </a></li>
            <li><a><span>News</span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 4.37808C9.13095 2.92228 6.18953 2.25933 
               3.99433 2.01127C2.89642 1.88721 2 2.80402 2 3.93518V15.2C2 16.3311 2.89642 17.2483 3.99433 
               17.3723C6.18953 17.6204 9.13095 18.2833 11.25 19.7391V4.37808ZM12.75 19.7391C14.869 18.2833 
               17.8105 17.6204 20.0057 17.3723C21.1036 17.2483 22 16.3311 22 15.2V3.93518C22 2.80402 21.1036 
               1.88721 20.0057 2.01127C17.8105 2.25933 14.869 2.92228 12.75 4.37808V19.7391ZM4.25882 7.13996C4.32221 
               6.73063 4.70543 6.45019 5.11477 6.51358C6.41754 6.71534 7.88469 7.05257 9.27049 7.58846C9.65682 7.73786 
               9.8489 8.17215 9.6995 8.55849C9.55011 8.94482 9.11581 9.1369 8.72948 8.9875C7.47083 8.50078 6.11398 
               8.18621 4.8852 7.99591C4.47587 7.93252 4.19543 7.5493 4.25882 7.13996ZM5.11477 10.5136C4.70543 10.4502 
               4.32221 10.7306 4.25882 11.14C4.19543 11.5493 4.47587 11.9325 4.8852 11.9959C5.50444 12.0918 6.15812 
               12.2196 6.81651 12.3857C7.21814 12.487 7.62587 12.2436 7.7272 11.8419C7.82853 11.4403 7.58509 11.0326
                7.18346 10.9313C6.47445 10.7524 5.7745 10.6158 5.11477 10.5136Z" fill="#1E2124" />
            </svg>
            </a></li>
            <li><a><span>Musics</span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd" clip-rule="evenodd" d="M12.25 4C12.25 2.55087 13.4891 1.09343 15.1648 1.52004C18.9498 2.48363 21.75 5.91386 21.75 10C21.75 11.159 21.5243 12.2671 21.1137 13.2814C20.999 13.5646 20.724 13.75 20.4185 13.75C20.1129 13.75 19.8379 13.5646 19.7233 13.2814C19.1709 11.9168 18.2213 10.5152 17.0274 9.46331C16.0413 8.59456 14.9228 7.99253 13.75 7.80891V17C13.75 20.1756 11.1756 22.75 8 22.75C4.82436 22.75 2.25 20.1756 2.25 17C2.25 13.8244 4.82436 11.25 8 11.25C9.68372 11.25 11.1984 11.9737 12.25 13.127V4Z" fill="#1E2124" />
            </svg>
            </a></li>
            <li><a><span>Settings</span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3333 3.5C15.0447 3.5 14 4.54467 14 5.83333V8.16667C14 9.45533 15.0447 10.5 16.3333 10.5H18.6667C19.9553 10.5 21 9.45533 21 8.16667V5.83333C21 4.54467 19.9553 3.5 18.6667 3.5H16.3333ZM5.33333 13.5C4.04467 13.5 3 14.5447 3 15.8333V18.1667C3 19.4553 4.04467 20.5 5.33333 20.5H7.66667C8.95533 20.5 10 19.4553 10 18.1667V15.8333C10 14.5447 8.95533 13.5 7.66667 13.5H5.33333ZM3 5.83333C3 4.54467 4.04467 3.5 5.33333 3.5H7.66667C8.95533 3.5 10 4.54467 10 5.83333V8.16667C10 9.45533 8.95533 10.5 7.66667 10.5H5.33333C4.04467 10.5 3 9.45533 3 8.16667V5.83333ZM16.3333 13.5C15.0447 13.5 14 14.5447 14 15.8333V18.1667C14 19.4553 15.0447 20.5 16.3333 20.5H18.6667C19.9553 20.5 21 19.4553 21 18.1667V15.8333C21 14.5447 19.9553 13.5 18.6667 13.5H16.3333Z" fill="#1E2124" />
            </svg>
            </a></li>
         </ul>
      </nav>
   );
}

export default Navigation;
