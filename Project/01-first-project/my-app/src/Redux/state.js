import { rerenderAllTree } from "../render";

let state = {
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
      newPostText: "asdasd"
   },

   dialogsPage: {
      friendsData: [
         { id: 1, nickname: "Anasteisha Dobrinskaya", },
         { id: 2, nickname: "Vlad Bob", },
         { id: 3, nickname: "Max Somov", },
         { id: 4, nickname: "Yauheni Vasiluk", },
      ],
   }


}

export let addPost = () => {
   let newPost = {
      id: 4,
      text: updateNewPostText(),
      like: 0,
      dislike: 0,
   };

   state.profilePage.postsData.push(newPost);
   state.profilePage.newPostText = '';
   rerenderAllTree(state);
}

export let updateNewPostText = (newText) => {
   state.profilePage.newPostText = newText;
   rerenderAllTree(state);

}

export default state;
