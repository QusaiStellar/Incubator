import { connect } from 'react-redux';

import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../../Redux/dialogsPageReducer';

import Dialog from './Dialog';



const mapStateToProps = (state) => {
   return {
      state: state.dialogsPage,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      addMessage: () => dispatch(addMessageActionCreator()),
      updateText: (text) => dispatch(updateNewMessageTextActionCreator(text)),
   };
};

const DialogContainer = connect(
   mapStateToProps,
   mapDispatchToProps,
)(Dialog);



export default DialogContainer;
