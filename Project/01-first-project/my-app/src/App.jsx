import './App.css';
import { Route, Routes } from 'react-router-dom';

import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import NotFound from './components/NotFound/NotFound';
import FastDialog from './components/FastDialogs/FastDialogs';



const App = (props) => {
   return (
      <div className="app-wrapper">
         <Header />
         <div className="app-wrapper-content">
            <Navigation />
            <div className="changing-content">
               <Routes>
                  <Route exact path="/dialogs/*"
                     element={<Dialogs store={props.store} />} />
                  <Route path="/profile"
                     element={<Profile store={props.store} />} />
                  <Route path="/*"
                     element={<NotFound />} />
               </Routes >
            </div>
            <FastDialog state={props.state.dialogsPage.friendsData} />
         </div>
      </div>
   );
};

export default App;
