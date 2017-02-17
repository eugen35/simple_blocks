import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import TodoTextInput from './TodoTextInput';
import CanvasDiv from './CanvasDiv'

export default class CanvasView extends Component {


  render() {
    const { blockChat } = this.props
    return (
        <div style={{
          flexGrow: 1,
          flexShrink: 1,
          flexBasis: 'auto',
          overflow: 'scroll',
          backgroundColor: 'lightblue'
        }}>
          <CanvasDiv blockChat={blockChat}/>
        </div>

    );
  }
}
