import React from 'react';
import { connect } from 'react-redux';

import { follow, setUsers, unfollow, selectPage, totalUsers, preloader } from '../../Redux/usersPageReducer';

import Preloader from '../common/Preloader/Preloader';

import { getUsers } from '../../api/api';

import Users from './Users';

class UsersContainerAPI extends React.Component {

   componentDidMount() {
      this.props.preloader(true);
      getUsers(this.props.selectedPage, this.props.usersPerPage).then(data => {
         this.props.preloader(false);
         this.props.setUsers(data.items);
         this.props.totalUsers(data.totalCount);
      });
   }

   pageChanged = (p) => {
      this.props.preloader(true);
      this.props.selectPage(p);
      getUsers(this.props.selectedPage, this.props.usersPerPage).then(data => {
         this.props.preloader(false);
         this.props.setUsers(data.items);
      });
   };

   render = () => {
      return (
         this.props.isFatching ? <Preloader /> : <Users totalUsersCount={this.props.totalUsersCount}
            usersPerPage={this.props.usersPerPage}
            selectedPage={this.props.selectedPage}
            pageChanged={this.pageChanged}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
         />
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
   };
};



const UsersContainer = connect(
   mapStateToProps,
   { follow, unfollow, setUsers, selectPage, totalUsers, preloader },
)(UsersContainerAPI);

export default UsersContainer;