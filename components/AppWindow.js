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
    /*
    console.log('Координаты', e.clientX, ' ', e.clientY);
    console.log('Нажата ctrl ctrlKey:', e.ctrlKey ? 'да' : 'нет');
    console.log('Нажата ctrl altKey:', e.altKey ? 'да' : 'нет');
    console.log('Нажата ctrl shiftKey:', e.shiftKey ? 'да' : 'нет'); */
  }




  render() {
    return (
      <div style={{width:600, height:600, backgroundColor:'gray'}}>
        <div
          style={{
            width:500, height:500,
            display: 'table', borderColor: 'red',
            border:'solid', borderCollapse: 'collapse'
          }}
          onMouseMove={this.handleMouseMove} onWheel={this.handleWheel} >
          <NavToolBar/>
          <CanvasView/>
        </div>
      </div>
    );
  }
}
