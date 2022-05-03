const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';

const initialState = {
   users: [
      {
         id: 1, fullName: 'Andrew', status: 'Hello', location: { city: 'Minsk', country: 'Belarus' }, followed: true,
      },
      {
         id: 2, fullName: 'Anasteisha', status: 'Girlfriend', location: { city: 'Minsk', country: 'Belarus' }, followed: true,
      },
      {
         id: 3, fullName: 'Max', status: 'Friend', location: { city: 'Minsk', country: 'Belarus' }, followed: false,
      },
   ],
};

const usersPageReducer = (state = initialState, action) => {

   switch (action.type) {
      case FOLLOW: {
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  u.followed = true;
               }
               return u;
            }),
         };
      }
      case UNFOLLOW: {
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  u.followed = false;
               }
               return u;
            }),
         };
      }
      case SETUSERS: {
         return {
            ...state,
            users: action.users,
         };
      }
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