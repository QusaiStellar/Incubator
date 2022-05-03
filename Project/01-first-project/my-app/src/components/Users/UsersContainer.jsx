import Users from "./Users";
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
   return {users: state.usersPage.users};
};

const mapDispatchToProps = (dispatch) => {

}

const UsersContainer = connect(
   mapStateToProps,
   mapDispatchToProps,
)(Users);

export default UsersContainer;