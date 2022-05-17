import React from 'react';
import { connect } from 'react-redux';

import Navigation from './Navigation';

class NavigationContainer extends React.Component {
   render = () => {
      return (
         <Navigation {...this.props} />
      );
   };
};

const mapStatetoProps = (state) => {
   return {
      userId: state.userAuth.userId,
   };
};

export default  connect(mapStatetoProps,)(NavigationContainer);
