const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profilePageReducer = (state, action) => {
   switch (action.type) {

      case ADD_POST:
         let newPost = {
            id: 4,
            text: state.newPostText,
            like: 0,
            dislike: 0,
         };
         state.postsData.unshift(newPost);
         state.newPostText = '';
         return state;

      case UPDATE_NEW_POST_TEXT:
         state.newPostText = action.newText;
         return state;

      default:
         return state;
   }
}

export const addPostActionCreator = () => {
   return { type: ADD_POST }
}
export const updateNewPostTextActionCreator = (text) => {
   return {
      type: UPDATE_NEW_POST_TEXT,
      newText: text,
   }
}

export default profilePageReducer;