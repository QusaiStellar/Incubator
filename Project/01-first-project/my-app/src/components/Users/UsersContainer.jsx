import { connect } from 'react-redux';

import { followAC, setUsersAC, unfollowAC, selectPageAC, totalUsersAC } from '../../Redux/usersPageReducer';

import Users from './Users';


const mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      usersPerPage: state.usersPage.usersPerPage,
      totalUsersCount: state.usersPage.totalUsersCount,
      selectedPage: state.usersPage.selectedPage,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      follow: (userId) => dispatch(followAC(userId)),
      unfollow: (userId) => dispatch(unfollowAC(userId)),
      setUsers: (users) => dispatch(setUsersAC(users)),
      selectPage: (page) => dispatch(selectPageAC(page)),
      totalUsers: (totalUsersCount) => dispatch(totalUsersAC(totalUsersCount)),
   };
};

const UsersContainer = connect(
   mapStateToProps,
   mapDispatchToProps,
)(Users);

export default UsersContainer;