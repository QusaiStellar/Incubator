const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
   friendsData: [
      { id: 1, nickname: "Anasteisha Dobrinskaya", },
      { id: 2, nickname: "Vlad Bob", },
      { id: 3, nickname: "Max Somov", },
      { id: 4, nickname: "Yauheni Vasiluk", },
      { id: 5, nickname: "Max Martin", },
   ],
   messagesFromMe: [
      { id: 1, messageText: 'Lorem asdkk kkaksl!' },
      { id: 2, messageText: 'Lorem asdkk kkaksl!' },
      { id: 3, messageText: 'Lorem asdkk kkaksl!' },
      { id: 4, messageText: 'Lorem asdkk kkaksl!' },
   ],
   messagesFromFriend: [
      { id: 1, messageText: 'Lorem asdkk kkaksl!' },
      { id: 2, messageText: 'Lorem asdkk kkaksl!' },
      { id: 3, messageText: 'Lorem asdkk kkaksl!' },
      { id: 4, messageText: 'Lorem asdkk kkaksl!' },
   ],
   newMessageText: '',
}

const dialogsPageReducer = (state = initialState, action) => {
   switch (action.type) {

      case ADD_MESSAGE:
         let newMessage = {
            id: 5,
            messageText: state.newMessageText,
         };
         state.messagesFromMe.push(newMessage);
         state.newMessageText = '';
         return state;

      case UPDATE_NEW_MESSAGE_TEXT:
         state.newMessageText = action.newText;
         return state;

      default:
         return state;
   }
}

export const addMessageActionCreator = () => {
   return { type: ADD_MESSAGE }
}
export const updateNewMessageTextActionCreator = (text) => {
   return {
      type: UPDATE_NEW_MESSAGE_TEXT,
      newText: text,
   }
}

export default dialogsPageReducer;