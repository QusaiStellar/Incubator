const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';
const TOTAL_USERS = 'TOTAL_USERS';
const SELECT_PAGE = 'SELECT_PAGE';
const PRELOADER = 'PRELOADER';

const initialState = {
   users: [],
   usersPerPage: 10,
   totalUsersCount: 0,
   selectedPage: 1,
   isFatching: true,
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
      case PRELOADER:
         return {
            ...state,
            isFatching: action.isFatching,
         };
      default:
         return state;
   }
};

export const follow = (userId) => {
   return { type: FOLLOW, userId };
};
export const unfollow = (userId) => {
   return { type: UNFOLLOW, userId };
};
export const setUsers = (users) => {
   return { type: SETUSERS, users };
};
export const totalUsers = (totalUsersCount) => {
   return { type: TOTAL_USERS, totalUsersCount };
};
export const selectPage = (page) => {
   return { type: SELECT_PAGE, page };
};
export const preloader = (isFatching) => {
   return { type: PRELOADER, isFatching };
};
export default usersPageReducer;