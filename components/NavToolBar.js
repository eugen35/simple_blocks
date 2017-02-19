import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import TodoTextInput from './TodoTextInput';
import Block from './BlockDiv'

export default class NavToolBar extends Component {

  //@todo Нужно научиться тулбаром заполнять все до конца (на 100%)
  render() {
    const { fileSave } = this.props.blockChartActions
    return (
      <div style={{
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: 'auto',
        backgroundColor: 'pink'
      }}>
        <ul style={{display: 'inline', paddingLeft: 0}}>
          <li
            onClick = {fileSave}
            style={{display: 'inline', marginLeft: 10}}
          >
            Сохранить
          </li>
          <li style={{display: 'inline', marginLeft: 10}}>Выйти</li>
        </ul>
        <div style={{display:'flex'}}>
          <div style={{ width: 30, height: 30, backgroundColor:'gray'}}/>
          <div style={{width: 30, height: 30, backgroundColor:'lightblue'}}/>
          <div style={{width: 30, height: 30, backgroundColor:'lightgreen'}}/>
        </div>
      </div>
    );
  }
}
