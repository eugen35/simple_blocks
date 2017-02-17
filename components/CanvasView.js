import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import TodoTextInput from './TodoTextInput';
import CanvasDiv from './CanvasDiv'

export default class CanvasView extends Component {


  render() {
    return (
      <div style={{height: 'auto',display: 'table-row' ,borderColor: 'brown', backgroundColor:'lightblue', border:'solid', overflow: 'scroll'}}>
        <div style={{
          height: 400, width:'100%', maxWidth:'100%',
          overflow: 'scroll',
          backgroundColor:'pink'}}>
          ufhvfdlvhnld
          <CanvasDiv/>
          dvfdvfdv
        </div>
      </div>
    );
  }
}
