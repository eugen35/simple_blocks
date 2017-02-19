import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import TodoTextInput from './TodoTextInput';

export default class TextArea extends Component {
  render() {
    const { text, x, y, canvasScale, width, height, scale } = this.props
    const {textAreaChange, textAreaBlur } = this.props.blockChartActions
    console.log('ПЫТАЮСЬ НАПРИСОВАТЬ:', x, ' ', y)
    console.log('ПЫТАЮСЬ НАПРИСОВАТЬ:', x, ' ', y)
    return (
      <textarea
        autoFocus
        style = {{
          position: 'absolute',
          left: x * canvasScale,
          top: y * canvasScale,
          zIndex: 99999,
          width: width * scale * canvasScale,
          height: height * scale * canvasScale
        }}
        value = {text}
        onChange = {textAreaChange}
        onBlur = {textAreaBlur}
      />
    );
  }
}
