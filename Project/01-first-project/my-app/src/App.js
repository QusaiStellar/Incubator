
import './App.css';

const App = () => {
   return (
      <div className='app-wrapper'>

         <header className='header'>
            <img src={require('./img/logo.png')} />
         </header>

         <nav className='navigation'>
            <ul>
               <li><a>Profile</a></li>
               <li><a>Messages</a></li>
               <li><a>News</a></li>
               <li><a>Musics</a></li>
               <li><a>Settings</a></li>
            </ul>
         </nav>

         <main className='content'>
            <div className='content__background'>
               <img src={require('./img/main-bg.jpg')} />
            </div>
            <div className='user'>
               <div className='user__avatar'>
                  <img src={require('./img/avatar.jpg')} />
               </div>
               <div className='user__allinfo'>
                  <div className='user__name'>Andrew Dobrik</div>
                  <div className='user__info'>
                     <ul>
                        <li>Date of birthday: 26 april</li>
                        <li>City: Stolbtsy</li>
                        <li>Education: BNTU '18</li>
                        <li>Web-site: none</li>
                     </ul>
                  </div>
               </div>
            </div>
         </main>

      </div>
   );
}

export default App;
