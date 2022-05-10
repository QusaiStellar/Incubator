import { connect } from 'react-redux';
import * as axios from 'axios';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import React from 'react';

import { addPost, updateNewPostText, setUserProfile } from '../../../Redux/profilePageReducer';

import PostForm from './PostForm';


const withRouter = (PostFormContainer) => {
   const ComponentWithRouterProp = (props) => {
      const location = useLocation();
      const navigate = useNavigate();
      const params = useParams();

      return <PostFormContainer {...props} router={{ location, navigate, params }} />;
   };
   return ComponentWithRouterProp;
};

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


export default connect(
   mapStateToProps,
   { addPost, updateNewPostText, setUserProfile }
)(withRouter(PostFormContainer));
