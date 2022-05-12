import { connect } from 'react-redux';

import FastDialogs from './FastDialogs';



const mapStateToProps = (state) => {
   return {
      friends: state.dialogsPage.friends,
   };
};



const FastDialogsContainer = connect(
   mapStateToProps,
)(FastDialogs);



export default FastDialogsContainer;
