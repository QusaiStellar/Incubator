import dialogsPageReducer from "./dialogsPageReducer";
import profilePageReducer from "./profilePageReducer";


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

   dispatch(action) {

      this._state.profilePage = profilePageReducer(this._state.profilePage, action);
      this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);

      this._callSubscriber(this._state);

   },

   getState() {
      return this._state;
   },

   subscriber(observer) {
      this._callSubscriber = observer;
   },

}

export default store;
