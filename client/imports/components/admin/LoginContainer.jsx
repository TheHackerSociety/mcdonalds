import React from 'react';
import { connect } from 'param-store';
import Login from './Login';
import Admin from './Admin';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

class LoginContainer extends React.Component {
  render() {
    const { loggedIn, loggingIn } = this.props;
    const { path } = this.props.currentParams;
    if (path !== 'admin') {
      return null;
    }

    if (loggingIn) {
      return null;
    }

    if (loggedIn) {
      return <Admin />;
    }

    return <Login />;
  }
}

const dataContainer = createContainer(() => (
  {
    loggedIn: Boolean(Meteor.user()),
    loggingIn: Boolean(Meteor.loggingIn()),
  }
), LoginContainer);

export default connect(dataContainer, 'path');

LoginContainer.propTypes = {
  loggedIn: React.PropTypes.bool,
  loggingIn: React.PropTypes.bool,
  currentParams: React.PropTypes.object,
};
