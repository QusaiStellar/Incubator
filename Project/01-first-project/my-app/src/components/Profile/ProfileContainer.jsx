import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { addPost, updateNewPostText, setUserProfile } from '../../Redux/profilePageReducer';

import Profile from './Profile';

const withRouter = (ProfileContainer) => {
   const ComponentWithRouterProp = (props) => {
      const location = useLocation();
      const navigate = useNavigate();
      const params = useParams();
      return <ProfileContainer {...props} router={{ location, navigate, params }} />;
   };
   return ComponentWithRouterProp;
};

class ProfileContainer extends React.Component {

   componentDidMount() {
      let userId = this.props.router.params.userId;
      if (!userId) {
         userId = '';
      }

      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
         .then(response => {
            this.props.setUserProfile(response.data);
         });
   }

   render = () => {
      return <Profile  {...this.props} />;
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
)(withRouter(ProfileContainer));
