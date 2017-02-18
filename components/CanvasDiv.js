import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import TodoTextInput from './TodoTextInput';
import Block from './BlockDiv'

export default class Canvas extends Component {


  render() {
    //@todo [потенциальный bug] [неожиданное поведение] Возможно в этом месте я затираю элемент canvas (встроен в реакт)
    //@todo Нужно ещё координаты канваса прокинуть сюда
    //@todo Возможно canvasScale на координаты канваса тоже не так нужно умножать
    const { canvas, blocks  } = this.props.blockChat
    const  elMouseDown = this.props.elMouseDown
    const blockItems = Object.keys(blocks).map((id) =>
      <Block
        elMouseDown = {elMouseDown}
        key = {id}
        id = {id}
        x={blocks[id].x} y={blocks[id].y}
        width = {blocks[id].width} height = {blocks[id].height}
        scale = { blocks[id].scale }
        canvasScale = { canvas.canvasScale }
        backgroundColor = {blocks[id].backgroundColor}
      />
    )
    return (
      <div style={{
        width: canvas.width * canvas.canvasScale,
        height: canvas.height * canvas.canvasScale,
        backgroundColor: canvas.backgroundColor,
        borderColor: 'yellow', border:'solid'
      }}>
        { blockItems }
      </div>
    );
  }
}
