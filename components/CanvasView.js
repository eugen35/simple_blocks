import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import TodoTextInput from './TodoTextInput';
import CanvasDiv from './CanvasDiv'

export default class CanvasView extends Component {


  render() {
    return (
      <div style={{borderColor: 'brown', border:'solid'}}>
        <CanvasDiv/>
      </div>
    );
  }
}
