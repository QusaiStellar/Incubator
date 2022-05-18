import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { addPost, updateNewPostText, setUser } from '../../Redux/profilePageReducer';
import { withAuthRedirect } from '../common/hoc/withAuthRedirect';
import withRouter from '../common/hoc/withRouter';

import Profile from './Profile';

class ProfileContainer extends React.Component {

   componentDidMount() {
      let userId = this.props.router.params.userId;
      if (!userId) {
         userId = '';
      }
      this.props.setUser(userId);
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
   };
};

export default compose(
   connect(mapStateToProps, { addPost, updateNewPostText, setUser }),
   withRouter,
   withAuthRedirect
)(ProfileContainer);
