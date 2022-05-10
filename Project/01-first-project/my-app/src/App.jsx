import './App.css';
import { Route, Routes } from 'react-router-dom';

import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import NotFound from './components/NotFound/NotFound';
import FastDialogsContainer from './components/FastDialogs/FastDialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = () => {
   return (
      <div className="app-wrapper">
         <Header />
         <div className="app-wrapper-content">
            <Navigation />
            <div className="changing-content">
               <Routes>
                  <Route exact path="/dialogs/*"
                     element={<DialogsContainer />} />
                  <Route path="/profile/:userId"
                     element={<ProfileContainer />} />
                  <Route path="/users"
                     element={<section><div className="users-wrapper"><UsersContainer /></div></section>} />
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
