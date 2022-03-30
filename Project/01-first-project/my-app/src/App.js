import './App.css';
import Content from './components/Content/Content';
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
            <div className='app-wrapper-content'>
               <Routes>
                  <Route path='/dialogs' element={<Dialogs />} />
                  <Route path='/profile' element={<Content />} />
               </Routes >

            </div>
         </div>
      </BrowserRouter>
   );
}

export default App;
