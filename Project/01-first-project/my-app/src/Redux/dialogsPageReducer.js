const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const initialState = {
   friends: [],
   messagesFromMe: [
      { id: 1, messageText: 'messagesFromMe' },
      { id: 2, messageText: 'messagesFromMe' },
      { id: 3, messageText: 'messagesFromMe' },
      { id: 4, messageText: 'messagesFromMe' },
   ],
   messagesFromFriend: [
      { id: 1, messageText: 'messagesFromFriend' },
      { id: 2, messageText: 'messagesFromFriend' },
      { id: 3, messageText: 'messagesFromFriend' },
      { id: 4, messageText: 'messagesFromFriend' },
   ],
   newMessageText: '',
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