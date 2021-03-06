import './App.scss';
import './variables.module.scss';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { connect } from 'react-redux';

import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import NavigationContainer from './components/Navigation/NavigationContainer';
import NotFound from './components/NotFound/NotFound';
import FastDialogsContainer from './components/FastDialogs/FastDialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import NewsContainer from './components/News/NewsContainer';
import { isAutorized } from './Redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {

   componentDidMount() {
      this.props.isAutorized();
   }


   render = () => {
      if (!this.props.initialized) {
         return <Preloader />;
      }
      return (
         <div className="app-wrapper">
            <HeaderContainer />
            <div className="app-wrapper-content">
               <NavigationContainer />
               <div className="changing-content">
                  <Routes>
                     <Route exact path="/dialogs/*" element={<DialogsContainer />} />
                     <Route path="/profile/:userId" element={<ProfileContainer />} />
                     <Route path="/login" element={<Login />} />
                     <Route path="/news" element={<NewsContainer />} />
                     <Route path="/users"
                        element={<section><div className="users-wrapper"><UsersContainer /></div></section>} />
                     <Route path="*" element={<NotFound />} />
                  </Routes>
               </div>
               <FastDialogsContainer />
            </div>
         </div>
      );
   };
};

const mapStatetoProps = (state) => {
   return {
      initialized: state.app.autorized,
   };
};

export default connect(mapStatetoProps, { isAutorized })(App);
