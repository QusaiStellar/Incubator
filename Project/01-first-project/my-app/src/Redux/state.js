const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {

   _state: {
      profilePage: {
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
      },
      dialogsPage: {
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
   },
   _callSubscriber() {
   },
   _addPost() {
      let newPost = {
         id: 4,
         text: this._state.profilePage.newPostText,
         like: 0,
         dislike: 0,
      };
      this._state.profilePage.postsData.unshift(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
   },
   _updateNewPostText(newText) {

      this._state.profilePage.newPostText = newText;
      this._callSubscriber(this._state);

   },
   _addMessage() {
      let newMessage = {
         id: 5,
         messageText: this._state.dialogsPage.newMessageText,
      };
      this._state.dialogsPage.messagesFromMe.push(newMessage);
      this._state.dialogsPage.newMessageText = '';
      this._callSubscriber(this._state);
   },
   _updateNewMessageText(newText) {

      this._state.dialogsPage.newMessageText = newText;
      this._callSubscriber(this._state);

   },

   dispatch(action) {
      if (action.type === ADD_POST) {
         this._addPost();
      } else if (action.type === UPDATE_NEW_POST_TEXT) {
         this._updateNewPostText(action.newText);
      } else if (action.type === ADD_MESSAGE) {
         this._addMessage();
      } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
         this._updateNewMessageText(action.newText);
      }
   },

   getState() {
      return this._state;
   },
   subscriber(observer) {
      this._callSubscriber = observer;
   },

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
export const addMessageActionCreator = () => {
   return { type: ADD_MESSAGE }
}
export const updateNewMessageTextActionCreator = (text) => {
   return {
      type: UPDATE_NEW_MESSAGE_TEXT,
      newText: text,
   }
}


export default store;
