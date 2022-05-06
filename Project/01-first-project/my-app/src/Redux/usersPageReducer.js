const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';
const TOTAL_USERS = 'TOTAL_USERS';
const PAGES = 'PAGES';

const initialState = {
   users: [],
   usersPerPage: 10,
   totalUsersCount: 0,
   pagesCount: [],
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
      case TOTAL_USERS:
         return {
            ...state,
            totalUsersCount: action.totalUsersCount,
         };
      case PAGES:
         return {
            ...state,
            pagesCount: [...state.pagesCount, action.pagesCount],
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
export const totalUsersAC = (totalUsersCount) => {
   return { type: TOTAL_USERS, totalUsersCount };
};
export const pagesAC = (pagesCount) => {
   return { type: PAGES, pagesCount };
};
export default usersPageReducer;