import React from 'react';
import { connect } from 'param-store';

const MakeContainer = (component, _path, propTypes = {}) => {
  class Container extends React.Component {
    render() {
      const { path } = this.props.currentParams;
      if (!path.match(_path)) {
        return null;
      }

      return React.createElement(component, this.props);
    }
  }

  Container.propTypes = Object.assign(
    {},
    {
      currentParams: React.PropTypes.object,
    },
    propTypes
  );

  return connect(Container, 'path');
};

export default MakeContainer;

