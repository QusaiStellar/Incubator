import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';

import { setUserProfile } from '../../Redux/profilePageReducer';

import Profile from './Profile';


class ProfileContainer extends React.Component {

   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/22`)
         .then(response => {
            this.props.setUserProfile(response.data);
         });
   }

   render = () => {

      return (
         <Profile {...this.props} />
      );
   };
};

const mapStateToProps = (state) => {
   return {
      userProfile: state.profilePage.userProfile,
   };
};



export default connect(
   mapStateToProps,
   { setUserProfile }
)(ProfileContainer);
