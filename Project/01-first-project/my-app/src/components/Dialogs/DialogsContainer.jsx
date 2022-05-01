import { connect } from 'react-redux';

import Dialogs from './Dialogs';



const mapStateToProps = (state) => {
   return {
      friendsData: state.dialogsPage.friendsData,
   };
};



const DialogsContainer = connect(
   mapStateToProps,
)(Dialogs);



export default DialogsContainer;
