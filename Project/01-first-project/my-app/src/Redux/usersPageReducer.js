const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';
const TOTAL_USERS = 'TOTAL_USERS';
const SELECT_PAGE = 'SELECT_PAGE';

const initialState = {
   users: [],
   usersPerPage: 10,
   totalUsersCount: 0,
   selectedPage: 1,
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
      case SELECT_PAGE:
         return {
            ...state,
            selectedPage: action.page,
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
export const selectPageAC = (page) => {
   return { type: SELECT_PAGE, page };
};
export default usersPageReducer;