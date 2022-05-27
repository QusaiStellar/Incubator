import { userAuth } from './userAuthReducer';

const AUTORIZED_SUCCESS = 'AUTORIZED_SUCCESS';

const initialState = {
   autorized: false,
};

const appReducer = (state = initialState, action) => {

   switch (action.type) {

      case AUTORIZED_SUCCESS: {
         return {
            ...state,
            autorized: true,
         };
      }
      default:
         return state;
   }
};

export const setAutorized = () => {
   return {
      type: AUTORIZED_SUCCESS,
   };
};

export const isAutorized = () => {
   return (dispatch) => {
      const promise = dispatch(userAuth());
      Promise.all([promise]).then(() => { dispatch(setAutorized()); });
   };
};


export default appReducer;