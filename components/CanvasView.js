import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import TodoTextInput from './TodoTextInput';
import CanvasDiv from './CanvasDiv'

export default class CanvasView extends Component {


  render() {
    const { blockChat, blockChartActions } = this.props
    const {chartMove, chartDoubleClick} = this.props.blockChartActions
    //@todo Теперь view содержит ненужные полосы прокрутки... Что-то про них нужно думать
    return (
        <div
          onMouseMove= {(e)=>{
            if ( e.ctrlKey ) chartMove({clientX: e.clientX, clientY: e.clientY})
          }}
          onDoubleClick = {chartDoubleClick}
          style={{
            flexGrow: 1,
            flexShrink: 1,
            flexBasis: 'auto',
            overflow: 'scroll',
            backgroundColor: 'lightblue'
          }}
        >
          <CanvasDiv blockChat={blockChat} blockChartActions={blockChartActions}/>
        </div>

    );
  }
}
