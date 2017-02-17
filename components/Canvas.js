import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import TodoTextInput from './TodoTextInput';
import Block from './Block'

export default class Canvas extends Component {


  render() {
    return (
      <svg><Block/></svg>
    );
  }
}
