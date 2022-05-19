import { connect } from 'react-redux';
import React from 'react';

import { compose } from 'redux';

import { setUserProfile } from '../../../Redux/profilePageReducer';

import User from './User';



class UserContainer extends React.Component {
  

   render = () => {
      return <User  {...this.props} />;
   };
}

const mapStateToProps = (state) => {
   return {
      userProfile: state.profilePage.userProfile,
   };
};

export default compose(
   connect(mapStateToProps, { setUserProfile })
)(UserContainer);
