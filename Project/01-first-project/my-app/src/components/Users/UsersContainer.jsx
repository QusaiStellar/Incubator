import { connect } from 'react-redux';

import { followAC, setUsersAC, unfollowAC, pagesAC, totalUsersAC } from '../../Redux/usersPageReducer';

import Users from './Users';


const mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      usersPerPage: state.usersPage.usersPerPage,
      totalUsersCount: state.usersPage.totalUsers,
      pagesCount: state.usersPage.pages,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      follow: (userId) => dispatch(followAC(userId)),
      unfollow: (userId) => dispatch(unfollowAC(userId)),
      setUsers: (users) => dispatch(setUsersAC(users)),
      pages: (pagesCount) => dispatch(pagesAC(pagesCount)),
      totalUsers: (totalUsersCount) => dispatch(totalUsersAC(totalUsersCount)),
   };
};

const UsersContainer = connect(
   mapStateToProps,
   mapDispatchToProps,
)(Users);

export default UsersContainer;