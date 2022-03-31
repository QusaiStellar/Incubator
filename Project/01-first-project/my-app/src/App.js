import './App.css';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
   return (
      <BrowserRouter>
         <div className='app-wrapper'>
            <Header />
            <Navigation />
            <div className='container'>
               <div className='app-wrapper-content'>
                  <Routes>
                     <Route path='/dialogs' element={<Dialogs />} />
                     <Route path='/profile' element={<Profile />} />
                  </Routes >
               </div>
            </div>
         </div>
      </BrowserRouter>
   );
}

export default App;
