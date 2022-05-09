import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';

import { follow, setUsers, unfollow, selectPage, totalUsers, preloader } from '../../Redux/usersPageReducer';

import Preloader from '../common/Preloader/Preloader';

import Users from './Users';

class UsersContainerAPI extends React.Component {

   componentDidMount() {
      this.props.preloader(true);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.selectedPage}&count=${this.props.usersPerPage}`)
         .then(response => {
            this.props.preloader(false);
            this.props.setUsers(response.data.items);
            this.props.totalUsers(response.data.totalCount);
         });
   }

   pageChanged = (p) => {
      this.props.preloader(true);
      this.props.selectPage(p);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.selectedPage}&count=${this.props.usersPerPage}`)
         .then(response => {
            this.props.preloader(false);
            this.props.setUsers(response.data.items);
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