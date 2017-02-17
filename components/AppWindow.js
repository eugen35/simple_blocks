import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import TodoTextInput from './TodoTextInput';
import NavToolBar from './NavToolBar'
import CanvasView from './CanvasView'

export default class AppWindow extends Component {
  render() {
    //@todo [отдалённое] Имя класса убрать и убрать из index.html стиль appWindow1
    return (
      <div className="appWindow" style={{width:'100%', height:'100%',borderColor: 'red', border:'solid'}}>
        <NavToolBar/>
        <CanvasView/>
      </div>
    );
  }
}
