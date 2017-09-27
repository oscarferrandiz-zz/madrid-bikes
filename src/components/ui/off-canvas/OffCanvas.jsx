import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Autobind } from 'es-decorators';

export default class OffCanvas extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      opened: false
    };
  }

  @Autobind
  toggle() {
    this.setState({ opened: !this.state.opened });
  }

  render() {
    return (
      <div className={classnames('c-off-canvas', { 'c-off-canvas--opened': this.state.opened })}>
        <button onClick={this.toggle} type="button" className="off-canvas__btn">x</button>
        <div className="off-canvas__content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

OffCanvas.defaultProps = {
  children: []
};

OffCanvas.propTypes = {
  children: PropTypes.element
};
