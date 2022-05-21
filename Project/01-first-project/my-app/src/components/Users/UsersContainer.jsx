import React from 'react';
import { connect } from 'react-redux';

import { follow, unfollow, selectPage, totalUsers, preloader, toggleRequest, getUsers, changeUsersPage } from '../../Redux/usersPageReducer';

import Preloader from '../common/Preloader/Preloader';

import Users from './Users';

class UsersContainer extends React.Component {

   componentDidMount() {
      this.props.getUsers(this.props.selectedPage, this.props.usersPerPage);
   }

   pageChanged = (p) => {
      this.props.changeUsersPage(p, this.props.selectedPage, this.props.usersPerPage);
   };

   render = () => {
      return (
         this.props.isFatching ? <Preloader /> : <Users {...this.props} />
      );
   };
};

const mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      usersPerPage: state.usersPage.usersPerPage,
      totalUsersCount: state.usersPage.totalUsersCount,
      selectedPage: state.usersPage.selectedPage,
      isFatching: state.usersPage.isFatching,
      isRequest: state.usersPage.isRequest,
   };
};

export default connect(
   mapStateToProps,
   { follow, unfollow, getUsers, selectPage, totalUsers, preloader, toggleRequest, changeUsersPage },
)(UsersContainer);
