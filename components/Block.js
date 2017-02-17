import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import TodoTextInput from './TodoTextInput';

export default class Block extends Component {


  render() {
    console.log('олень')
    return (
      <circle cx={ 50} cy={ 50   } r={ 40 } fill="silver" />
    );
  }
}
