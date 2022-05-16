import React from 'react';
import { Navigate } from 'react-router-dom';

import { connect } from 'react-redux';

export const AuthRedirect = (Component) => {
   class RedirectAuth extends React.Component {
      render() {
         if (this.props.isAuth) return <Component {...this.props} />;
         return <Navigate replace to="/login" />;
      }
   };

   const ConectedAuthRedirect = connect(mapStateToProps)(RedirectAuth);
   return ConectedAuthRedirect;
};

const mapStateToProps = (state) => {
   return {
      isAuth: state.userAuth.isAuth,
   };
};
