const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
   postsData: [
      {
         id: 1, text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, voluptatum blanditiis, rerum odio vel nisi quaerat necessitatibus vitae facilis perspiciatis itaque doloremque iure nam porro illo in pariatur et ea?',
         like: 10, dislike: 2,
      },
      {
         id: 2, text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
         like: 40, dislike: 4,
      },
      {
         id: 3, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ex cupiditate nulla, nam maxime sint odio eligendi aliquid necessitatibus ut?',
         like: 22, dislike: 1,
      },
   ],
   newPostText: "",
}

const profilePageReducer = (state = initialState, action) => {

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