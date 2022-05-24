import React from 'react';
import { connect } from 'react-redux';

import { logout, userAuth } from '../../Redux/userAuthReducer';

import Header from './Header';



class HeaderContainer extends React.Component {

   componentDidMount() {
      this.props.userAuth();
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

export default connect(mapStatetoProps, { userAuth, logout })(HeaderContainer);