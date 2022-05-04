const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';

const initialState = {
   users: [],
};
const usersPageReducer = (state = initialState, action) => {

   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  u.followed = true;
               }
               return u;
            }),
         };
      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  u.followed = false;
               }
               return u;
            }),
         };
      case SETUSERS:
         return {
            ...state,
            users: action.users,
         };
      default:
         return state;
   }
};

export const followAC = (userId) => {
   return { type: FOLLOW, userId };
};
export const unfollowAC = (userId) => {
   return { type: UNFOLLOW, userId };
};
export const setUsersAC = (users) => {
   return { type: SETUSERS, users };
};
export default usersPageReducer;