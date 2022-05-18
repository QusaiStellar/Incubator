import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import withRouter from '../common/hoc/withRouter';

import Dialogs from './Dialogs';

class DialogsContainer extends React.Component {
   render = () => {
      return <Dialogs  {...this.props} />;
   };
}

const mapStateToProps = (state) => {
   return {
      friends: state.usersPage.friends,
   };
};

export default compose(
   connect(mapStateToProps,),
   withRouter
)(DialogsContainer);
