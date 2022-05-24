import { profileAPI } from '../api/api';

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

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
   userProfile: null,
   userStatus: '',
};

const profilePageReducer = (state = initialState, action) => {

   switch (action.type) {

      case ADD_POST: {
         const newPost = {
            id: 4,
            text: action.postText,
            like: 0,
            dislike: 0,
         };
         return {
            ...state,
            postsData: [newPost, ...state.postsData],
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
      case SET_USER_STATUS: {
         return {
            ...state,
            userStatus: action.status,
         };
      }
      default:
         return state;
   }
};
/*============Action creators===========*/
export const addPost = (postText) => {
   return { type: ADD_POST, postText };
};

export const setUserProfile = (userProfile) => {
   return {
      type: SET_USER_PROFILE,
      userProfile: userProfile,
   };
};
export const setUserStatus = (status) => {
   return {
      type: SET_USER_STATUS,
      status: status,
   };
};
/*============THUNKS===========*/
export const setUser = (userId) => {
   return (dispatch) => {
      profileAPI.setUser(userId).then(data => dispatch(setUserProfile(data)));
   };
};
export const getStatus = (userId) => {
   return (dispatch) => {
      profileAPI.getUserStatus(userId).then(data => dispatch(setUserStatus(data)));
   };
};
export const setStatus = (status) => {
   return (dispatch) => {
      profileAPI.setUserStatus(status).then(data => { if (data.resultCode === 0) dispatch(setUserStatus(status)); });
   };
};


export default profilePageReducer;