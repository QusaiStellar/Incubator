import './App.css';
import { Route, Routes } from 'react-router-dom';

import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import NotFound from './components/NotFound/NotFound';
import FastDialogsContainer from './components/FastDialogs/FastDialogsContainer';



const App = (props) => {
   return (
      <div className="app-wrapper">
         <Header />
         <div className="app-wrapper-content">
            <Navigation />
            <div className="changing-content">
               <Routes>
                  <Route exact path="/dialogs/*"
                     element={<DialogsContainer />} />
                  <Route path="/profile"
                     element={<Profile />} />
                  <Route path="/*"
                     element={<NotFound />} />
               </Routes>
            </div>
            <FastDialogsContainer />
         </div>
      </div>
   );
};

export default App;
