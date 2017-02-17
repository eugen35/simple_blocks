import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import TodoTextInput from './TodoTextInput';
import Block from './BlockDiv'

export default class Canvas extends Component {


  render() {
    return (
      <div style={{backgroundColor:'lightgreen', borderColor: 'yellow', border:'solid', width: 10000, height: 10000 }}><Block x={100} y={100} width = {50} height = {50} backgroundColor = 'yellow'/></div>
    );
  }
}
