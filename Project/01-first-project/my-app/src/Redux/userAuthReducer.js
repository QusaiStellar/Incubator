import { auth } from '../api/api';

const SET_USER_AUTH = 'SET_USER_AUTH';

const initialState = {
   userId: null,
   login: null,
   email: null,
   isAuth: false,
};

const userAuthReducer = (state = initialState, action) => {

   switch (action.type) {

      case SET_USER_AUTH: {
         return {
            ...state,
            userId: action.userId,
            login: action.login,
            email: action.email,
            isAuth: true,
         };
      }
      default:
         return state;
   }
};


export const setUserAuth = (userId, login, email) => {
   return {
      type: SET_USER_AUTH,
      userId, login, email,
   };
};

export const userAuth = (userId) => {
   return (dispatch) => {
      auth().then(data => {
         if (data.resultCode === 0) {
            const { id, login, email } = data.data;
            dispatch(setUserAuth(id, login, email));
         }
      });
   };
};

export default userAuthReducer;