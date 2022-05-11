import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';

import { setUserAuth } from '../../Redux/userAuthReducer';

import Header from './Header';



class HeaderContainer extends React.Component {

   componentDidMount() {
      axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', { withCredentials: true })
         .then(response => {

            if (response.data.resultCode === 0) {
               const { id, login, email } = response.data.data;
               this.props.setUserAuth(id, login, email);
            }
         });
   }
   render = () => {
      return (
         <Header {...this.props} />
      );
   };
};

const mapStatetoProps = (state) => {
   return {
      userId: state.userAuth.userId,
      login: state.userAuth.login,
      email: state.userAuth.email,
      isAuth: state.userAuth.isAuth,
   };
};

export default connect(mapStatetoProps, { setUserAuth })(HeaderContainer);
