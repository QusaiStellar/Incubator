import './App.css';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import NotFound from './components/NotFound/NotFound';
import { Route, Routes } from 'react-router-dom';
import FastDialog from './components/FastDialogs/FastDialogs';



const App = (props) => {
   return (
      <div className='app-wrapper'>
         <Header />
         <div className='app-wrapper-content'>
            <Navigation />
            <div className='changing-content'>
               <Routes>
                  <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPage} />} />
                  <Route path='/profile' element={<Profile state={props.state.profilePage}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}
                  />} />
                  <Route path='/*' element={<NotFound />} />
               </Routes >
            </div>
            <FastDialog state={props.state.dialogsPage.friendsData} />
         </div>
      </div>
   );
}

export default App;
