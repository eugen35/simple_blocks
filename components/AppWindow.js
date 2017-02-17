import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import TodoTextInput from './TodoTextInput';
import NavToolBar from './NavToolBar'
import CanvasView from './CanvasView'

export default class AppWindow extends Component {
  handleWheel = (e) => {
    console.log('Направления', e.deltaY < 0 ? 'вверх' : 'вниз' );
    console.log('Нажата ctrl ctrlKey:', e.ctrlKey ? 'да' : 'нет');
    console.log('Нажата ctrl altKey:', e.altKey ? 'да' : 'нет');
    console.log('Нажата ctrl shiftKey:', e.shiftKey ? 'да' : 'нет');
  }

  handleMouseMove = (e) => {
    console.log('Координаты', e.clientX, ' ', e.clientY);
    console.log('Нажата ctrl ctrlKey:', e.ctrlKey ? 'да' : 'нет');
    console.log('Нажата ctrl altKey:', e.altKey ? 'да' : 'нет');
    console.log('Нажата ctrl shiftKey:', e.shiftKey ? 'да' : 'нет');
  }




  render() {
    //@todo [отдалённое] Имя класса убрать и убрать из index.html стиль appWindow1
    return (
      <div onMouseMove={this.handleMouseMove} onWheel={this.handleWheel} className="appWindow" style={{width:'100%', height:'100%',borderColor: 'red', border:'solid'}}>
        <input type="text" id="one" onKeyPress={this.handleKeyPress}/>
        <NavToolBar/>
        <CanvasView/>
      </div>
    );
  }
}
