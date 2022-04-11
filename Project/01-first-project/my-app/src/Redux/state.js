
let store = {

   state: {
      profilePage: {
         postsData: [
            {
               id: 1, text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, voluptatum blanditiis, rerum odio vel nisi quaerat necessitatibus vitae facilis perspiciatis itaque doloremque iure nam porro illo in pariatur et ea?',
               like: 10, dislike: 2,
            },
            {
               id: 2, text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
               like: 20, dislike: 4,
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
         ],
      }
   },

   rerenderAllTree() {
   },

   subscriber(observer) {
      store.rerenderAllTree = observer;
   },

   addPost() {
      let newPost = {
         id: 4,
         text: store.state.profilePage.newPostText,
         like: 0,
         dislike: 0,
      };
      store.state.profilePage.postsData.push(newPost);
      store.state.profilePage.newPostText = '';
      store.rerenderAllTree(store.state);
   },

   updateNewPostText(newText) {

      store.state.profilePage.newPostText = newText;
      debugger;
      store.rerenderAllTree(store);

   }
}

export default store;
