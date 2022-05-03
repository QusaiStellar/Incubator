import { connect } from 'react-redux';

import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profilePageReducer';

import PostForm from './PostForm';

const mapStateToProps = (state) => {
   return {
      newPostText: state.profilePage.newPostText,
      postsData: state.profilePage.postsData,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      addPost: () => {
         dispatch(addPostActionCreator());
      },
      updateNewPostText: (text) => {
         dispatch(updateNewPostTextActionCreator(text));
      },
   };
};

const PostFormContainer = connect(
   mapStateToProps,
   mapDispatchToProps
)(PostForm);



export default PostFormContainer;
