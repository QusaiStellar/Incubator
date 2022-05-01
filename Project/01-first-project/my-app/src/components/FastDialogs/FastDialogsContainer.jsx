import { connect } from 'react-redux';

import FastDialogs from './FastDialogs';



const mapStateToProps = (state) => {
   return {
      state: state.dialogsPage.friendsData,
   };
};



const FastDialogsContainer = connect(
   mapStateToProps,
)(FastDialogs);



export default FastDialogsContainer;
