import { authAPI } from '../api/api';

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
            isAuth: action.isAuth,
         };
      }
      default:
         return state;
   }
};

export const setUserAuth = (userId, login, email, isAuth) => {
   return {
      type: SET_USER_AUTH,
      userId, login, email, isAuth,
   };
};

export const userAuth = () => {
   return (dispatch) => {
      authAPI.isAuth().then(data => {
         if (data.resultCode === 0) {
            const { id, login, email } = data.data;
            dispatch(setUserAuth(id, login, email, true));
         }
      });
   };
};

export const login = (email, password, rememberMe, setError) => {
   return (dispatch) => {
      authAPI.login(email, password, rememberMe).then(data => {
         if (data.resultCode === 0) {
            dispatch(userAuth());
         } else {
            const { messages } = data;
            setError('email', { type: 'server', message: messages });
         }
      });
   };
};
export const logout = () => {
   return (dispatch) => {
      authAPI.logout().then(data => {
         if (data.resultCode === 0) {
            dispatch(setUserAuth(null, null, null, false));
         }
      });
   };
};

export default userAuthReducer;