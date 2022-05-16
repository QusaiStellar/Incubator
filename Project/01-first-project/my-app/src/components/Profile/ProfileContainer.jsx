import React from 'react';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { addPost, updateNewPostText, setUser } from '../../Redux/profilePageReducer';
import { AuthRedirect } from '../common/AuthRedirect/AuthRedirect';

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
      this.props.setUser(userId);
   }


   render = () => {
      return <Profile {...this.props} />;
   };
}
const ProfileAuthRedirect = AuthRedirect(withRouter(ProfileContainer));


const mapStateToProps = (state) => {
   return {
      newPostText: state.profilePage.newPostText,
      postsData: state.profilePage.postsData,
      userProfile: state.profilePage.userProfile,
   };
};


export default connect(
   mapStateToProps,
   { addPost, updateNewPostText, setUser }
)(ProfileAuthRedirect);
