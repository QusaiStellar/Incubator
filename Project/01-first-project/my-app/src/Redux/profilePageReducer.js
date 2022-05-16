import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
   postsData: [
      {
         id: 1, text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, voluptatum blanditiis, rerum odio vel nisi quaerat necessitatibus vitae facilis perspiciatis itaque doloremque iure nam porro illo in pariatur et ea?',
         like: 10, dislike: 2,
      },
      {
         id: 2, text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
         like: 40, dislike: 4,
      },
      {
         id: 3, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ex cupiditate nulla, nam maxime sint odio eligendi aliquid necessitatibus ut?',
         like: 22, dislike: 1,
      },
   ],
   newPostText: '',
   userProfile: null,
};

const profilePageReducer = (state = initialState, action) => {

   switch (action.type) {

      case ADD_POST: {
         const newPost = {
            id: 4,
            text: state.newPostText,
            like: 0,
            dislike: 0,
         };
         return {
            ...state,
            postsData: [newPost, ...state.postsData],
            newPostText: '',
         };
      }
      case UPDATE_NEW_POST_TEXT: {
         return {
            ...state,
            newPostText: action.newText,
         };
      }
      case SET_USER_PROFILE: {
         return {
            ...state,
            userProfile: action.userProfile,
         };
      }
      default:
         return state;
   }
};

export const addPost = () => {
   return { type: ADD_POST };
};
export const updateNewPostText = (text) => {
   return {
      type: UPDATE_NEW_POST_TEXT,
      newText: text,
   };
};
export const setUserProfile = (userProfile) => {
   return {
      type: SET_USER_PROFILE,
      userProfile: userProfile,
   };
};

export const setUser = (userId) => {
   return (dispatch) => {
      profileAPI.setUsers(userId).then(data => dispatch(setUserProfile(data)));
   };
};


export default profilePageReducer;