import { usersAPI } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const TOTAL_USERS = 'TOTAL_USERS';
const SELECT_PAGE = 'SELECT_PAGE';
const PRELOADER = 'PRELOADER';
const TOGGLE_ACTIVE_REQUEST = 'TOGGLE_ACTIVE_REQUEST';

const initialState = {
   users: [],
   friends: [],
   usersPerPage: 10,
   totalUsersCount: 0,
   selectedPage: 1,
   isFatching: true,
   isRequest: [],
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
      case SET_USERS:
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
      case TOGGLE_ACTIVE_REQUEST:
         return {
            ...state,
            isRequest: action.isFatching
               ? [...state.isRequest, action.userId]
               : state.isRequest.filter(el => el !== action.userId),
         };
      default:
         return state;
   }
};

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const totalUsers = (totalUsersCount) => ({ type: TOTAL_USERS, totalUsersCount });
export const selectPage = (page) => ({ type: SELECT_PAGE, page });
export const preloader = (isFatching) => ({ type: PRELOADER, isFatching });
export const toggleRequest = (isFatching, userId) => ({ type: TOGGLE_ACTIVE_REQUEST, isFatching, userId });

export const getUsers = (selectedPage, usersPerPage) => {
   return (dispatch) => {
      dispatch(preloader(true));
      usersAPI.getUsers(selectedPage, usersPerPage).then(data => {
         dispatch(preloader(false));
         dispatch(setUsers(data.items));
         dispatch(totalUsers(data.totalCount));
      });
   };
};
export const changeUsersPage = (page, selectedPage, usersPerPage) => {
   return (dispatch) => {
      dispatch(preloader(true));
      dispatch(selectPage(page));
      usersAPI.getUsers(selectedPage, usersPerPage).then(data => {
         dispatch(preloader(false));
         dispatch(setUsers(data.items));
      });
   };
};
export const follow = (userId) => {
   return (dispatch) => {
      dispatch(toggleRequest(true, userId));
      usersAPI.follow(userId).then(data => {
         if (data.resultCode === 0) {
            dispatch(followSuccess(userId));
         }
         dispatch(toggleRequest(false, userId));
      });
   };
};
export const unfollow = (userId) => {
   return (dispatch) => {
      dispatch(toggleRequest(true, userId));
      usersAPI.unfollow(userId).then(data => {
         if (data.resultCode === 0) {
            dispatch(unfollowSuccess(userId));
         }
         dispatch(toggleRequest(false, userId));
      });
   };
};

export default usersPageReducer;