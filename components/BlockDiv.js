import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import TodoTextInput from './TodoTextInput';

//@todo [юзабилити] [срочность-средняя] Позицию div пришлось сделать в absolute, так как иначе не мог див на див стоять. Но теперь блоки можно вынести на меню, а этого нельзя делать. Поэтому нужно поставить ограничители на таскание блоков
export default class Block extends Component {
  render() {
    const { id, x, y, width, height, backgroundColor, scale, text, canvasScale } = this.props
    //@todo [юзабилити] [средняя срочность] При увеличении canvasScale - координаты должны изменяться в зависомости от того, где див размещён (и от его размера)
    const  { elMouseDown, elDoubleClick } = this.props.blockChartActions
    return (
      <div
        onMouseDown = {(e)=>elMouseDown({clientX: e.clientX, clientY: e.clientY, elType:'block', elId: id})}
        onDoubleClick = {(e)=>{e.stopPropagation(); elDoubleClick({elType:'block', elId: id})}}
        style = {{
          borderColor: 'red', border:'solid',
          top: y * canvasScale, left: x * canvasScale,
          width: width * scale * canvasScale, height: height * scale * canvasScale, backgroundColor,
          position: 'absolute',
          wordWrap: 'break-word',
          overflow: 'auto'
        }}
      >
        {text}
      </div>
    );
  }
}
