
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
         newPostText: ""
      },
      dialogsPage: {
         friendsData: [
            { id: 1, nickname: "Anasteisha Dobrinskaya", },
            { id: 2, nickname: "Vlad Bob", },
            { id: 3, nickname: "Max Somov", },
            { id: 4, nickname: "Yauheni Vasiluk", },
            { id: 5, nickname: "Max Martin", },
         ],
      }
   },

   getState() {
      return this._state;
   },

   _callSubscriber() {
   },

   subscriber(observer) {
      this._callSubscriber = observer;
   },

   addPost() {
      let newPost = {
         id: 4,
         text: this._state.profilePage.newPostText,
         like: 0,
         dislike: 0,
      };
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
   },
   updateNewPostText(newText) {

      this._state.profilePage.newPostText = newText;
      this._callSubscriber(this._state);

   }
}

export default store;
