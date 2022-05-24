import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { addPost, setUser, getStatus, setStatus } from '../../Redux/profilePageReducer';
import withRouter from '../common/hoc/withRouter';

import Profile from './Profile';

class ProfileContainer extends React.Component {

   componentDidMount() {
      let userId = this.props.router.params.userId;
      if (!userId) {
         userId = '';
      }
      this.props.setUser(userId);
      this.props.getStatus(userId);
   }


   render = () => {
      return <Profile {...this.props} />;
   };
}

const mapStateToProps = (state) => {
   return {
      newPostText: state.profilePage.newPostText,
      postsData: state.profilePage.postsData,
      userProfile: state.profilePage.userProfile,
      userStatus: state.profilePage.userStatus,
   };
};

export default compose(
   connect(mapStateToProps, { addPost, setUser, getStatus, setStatus }),
   withRouter,
)(ProfileContainer);
