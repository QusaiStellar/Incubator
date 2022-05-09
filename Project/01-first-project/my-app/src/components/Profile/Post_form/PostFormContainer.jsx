import { connect } from 'react-redux';

import { addPost, updateNewPostText } from '../../../Redux/profilePageReducer';

import PostForm from './PostForm';

const mapStateToProps = (state) => {
   return {
      newPostText: state.profilePage.newPostText,
      postsData: state.profilePage.postsData,
   };
};


const PostFormContainer = connect(
   mapStateToProps,
   { addPost, updateNewPostText }
)(PostForm);



export default PostFormContainer;
