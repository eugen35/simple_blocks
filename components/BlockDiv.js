import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import TodoTextInput from './TodoTextInput';

export default class Block extends Component {


  render() {
    const { x, y, width, height, backgroundColor } = this.props
    return (
      <div style = {{ borderColor: 'red', border:'solid', top: y, left: x, width, height, backgroundColor, position: 'relative' }} />
    );
  }
}
