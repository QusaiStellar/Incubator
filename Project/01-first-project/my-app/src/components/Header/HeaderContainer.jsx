import React from 'react';
import { connect } from 'react-redux';

import { auth } from '../../api/api';

import { setUserAuth } from '../../Redux/userAuthReducer';

import Header from './Header';



class HeaderContainer extends React.Component {

   componentDidMount() {
      auth().then(data => {
         if (data.resultCode === 0) {
            const { id, login, email } = data.data;
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
