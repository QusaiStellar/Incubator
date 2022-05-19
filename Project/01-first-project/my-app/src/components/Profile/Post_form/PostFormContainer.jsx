import { connect } from 'react-redux';
import React from 'react';

import { compose } from 'redux';

import { addPost, updateNewPostText, setUserProfile } from '../../../Redux/profilePageReducer';

import withRouter from '../../common/hoc/withRouter';

import PostForm from './PostForm';


class PostFormContainer extends React.Component {
   
   render = () => {
      return <PostForm  {...this.props} />;
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
   connect(mapStateToProps, { addPost, updateNewPostText, setUserProfile }),
   withRouter
)(PostFormContainer);
