import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import TodoTextInput from './TodoTextInput';
import Block from './BlockDiv'

export default class NavToolBar extends Component {

  //@todo Нужно научиться тулбаром заполнять все до конца (на 100%)
  render() {
    return (
      <div style={{height: 0, display: 'table-row', borderColor: 'red', border:'solid', backgroundColor:'yellow' }}>
        <ul style={{display: 'inline', paddingLeft: 0}}>
          <li style={{display: 'inline', marginLeft: 10}}>Файл</li>
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
