import { connect } from 'react-redux';

import { addMessage, updateNewMessageText } from '../../../../Redux/dialogsPageReducer';

import Dialog from './Dialog';



const mapStateToProps = (state) => {
   return {
      state: state.dialogsPage,
   };
};

const DialogContainer = connect(
   mapStateToProps,
   { addMessage, updateNewMessageText },
)(Dialog);



export default DialogContainer;
