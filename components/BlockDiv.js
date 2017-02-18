import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import TodoTextInput from './TodoTextInput';

export default class Block extends Component {
  render() {
    const { id, x, y, width, height, backgroundColor, scale, canvasScale } = this.props
    //@todo [юзабилити] [средняя срочность] При увеличении canvasScale - координаты должны изменяться в зависомости от того, где див размещён (и от его размера)
    const  elMouseDown = this.props.elMouseDown
    return (
      <div
        onMouseDown = {(e)=>elMouseDown({clientX: e.clientX, clientY: e.clientY, elType:'block', elId: id})}
        style = {{
        borderColor: 'red', border:'solid',
        top: y * canvasScale, left: x * canvasScale,
        width: width * scale * canvasScale, height: height * scale * canvasScale, backgroundColor,
        position: 'relative' }}
      />
    );
  }
}
