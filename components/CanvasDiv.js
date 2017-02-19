import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import TodoTextInput from './TodoTextInput';
import Block from './BlockDiv'
import TextArea from './TextArea'

export default class Canvas extends Component {


  render() {
    //@todo [потенциальный bug] [неожиданное поведение] Возможно в этом месте я затираю элемент canvas (встроен в реакт)
    //@todo Нужно ещё координаты канваса прокинуть сюда
    //@todo Возможно canvasScale на координаты канваса тоже не так нужно умножать
    const { canvas, blocks, textArea  } = this.props.blockChat
    const blockChartActions = this.props.blockChartActions
    let textAreaInfo=textArea
    let textAreaX, textAreaY, textAreaWidth, textAreaHeight, textAreaScale
    if (undefined != textArea) {
      textAreaX = this.props.blockChat.blocks[textAreaInfo.elId].x
      textAreaY = this.props.blockChat.blocks[textAreaInfo.elId].y
      textAreaWidth = this.props.blockChat.blocks[textAreaInfo.elId].width
      textAreaHeight = this.props.blockChat.blocks[textAreaInfo.elId].height
      textAreaScale = this.props.blockChat.blocks[textAreaInfo.elId].scale
    }
    const blockItems = Object.keys(blocks).map((id) =>
      <Block
        blockChartActions={blockChartActions}
        key = {id}
        id = {id}
        x={blocks[id].x} y={blocks[id].y}
        width = {blocks[id].width} height = {blocks[id].height}
        scale = { blocks[id].scale }
        canvasScale = { canvas.canvasScale }
        backgroundColor = {blocks[id].backgroundColor}
        text = { blocks[id].text }
      />
    )
    //Сам по себе canvasDiv стал невидимым (и нет в нём событий). Он теперь нужен, только чтобы не ручками считать координаты всех фигур, а таскать их разом, т.к. они его наследники
    return (
      <div
        style={{
          left: canvas.x,
          top: canvas.y,
          position: 'absolute'
        }}
      >
        { undefined != textAreaInfo &&
        <TextArea
          blockChartActions={blockChartActions}
          text = {blocks[textAreaInfo.elId].text}
          x = { textAreaX }
          y = { textAreaY }
          scale = { textAreaScale }
          canvasScale = { canvas.canvasScale }
          width = {textAreaWidth}
          height = {textAreaHeight}
        />
        }
        { blockItems }
      </div>
    );
  }
}
