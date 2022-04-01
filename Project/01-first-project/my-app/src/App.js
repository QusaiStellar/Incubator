import './App.css';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

let postsData = [
   {
      id: 1, text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, voluptatum blanditiis, rerum odio vel nisi quaerat necessitatibus vitae facilis perspiciatis itaque doloremque iure nam porro illo in pariatur et ea?',
      like: 10, dislike: 2,
   },
   {
      id: 2, text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      like: 20, dislike: 4,
   },
   {
      id: 3, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ex cupiditate nulla, nam maxime sint odio eligendi aliquid necessitatibus ut?',
      like: 22, dislike: 1,
   },
]

let friendsData = [
   { id: 1, nickname: "Anasteisha Dobrinskaya", },
   { id: 2, nickname: "Vlad Bob", },
   { id: 3, nickname: "Max Somov", },
   { id: 4, nickname: "Yauheni Vasiluk", },
];



const App = () => {
   return (
      <BrowserRouter>
         <div className='app-wrapper'>
            <Header />
            <Navigation />
            <div className='app-wrapper-content'>
               <Routes>
                  <Route path='/dialogs' element={<Dialogs friendsData={friendsData} />} />
                  <Route path='/profile' element={<Profile postsData={postsData} />} />
               </Routes >
            </div>
         </div>
      </BrowserRouter>
   );
}

export default App;
