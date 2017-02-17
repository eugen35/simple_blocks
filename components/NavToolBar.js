import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import TodoTextInput from './TodoTextInput';
import Block from './BlockDiv'

export default class NavToolBar extends Component {

  //@todo Нужно научиться тулбаром заполнять все до конца (на 100%)
  render() {
    return (
      <div style={{
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: 'auto',
        backgroundColor: 'pink'
      }}>
        <p><b>header</b>
          <br />
          <br />(sized to content)</p>
      </div>
    );
  }
}
