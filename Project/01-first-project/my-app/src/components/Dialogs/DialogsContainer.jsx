import React from 'react';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import Dialogs from './Dialogs';

class DialogsContainer extends React.Component {

   render = () => {
      return <Dialogs  {...this.props} />;
   };
}


const withRouter = (DialogsContainer) => {
   const ComponentWithRouterProp = (props) => {
      const location = useLocation();
      const navigate = useNavigate();
      const params = useParams();

      return <DialogsContainer {...props} router={{ location, navigate, params }} />;
   };
   return ComponentWithRouterProp;
};

const mapStateToProps = (state) => {
   return {
      friends: state.dialogsPage.friends,
   };
};

export default connect(
   mapStateToProps,
)(withRouter(DialogsContainer));