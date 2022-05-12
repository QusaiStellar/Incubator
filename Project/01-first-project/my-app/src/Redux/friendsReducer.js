const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const initialState = {
   friends: [],
};

const dialogsPageReducer = (state = initialState, action) => {
   switch (action.type) {

      case ADD_MESSAGE: {
         const newMessage = {
            id: 5,
            messageText: state.newMessageText,
         };
         return {
            ...state,
            messagesFromMe: [...state.messagesFromMe, newMessage],
            newMessageText: '',

         };
      }
      case UPDATE_NEW_MESSAGE_TEXT: {
         return {
            ...state,
            newMessageText: action.newText,
         };
      }
      default:
         return state;
   }
};

export const addMessage = () => {
   return { type: ADD_MESSAGE };
};
export const updateNewMessageText = (text) => {
   return {
      type: UPDATE_NEW_MESSAGE_TEXT,
      newText: text,
   };
};

export default dialogsPageReducer;