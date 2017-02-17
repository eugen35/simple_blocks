import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import AppWindow from '../components/AppWindow';
import * as TodoActions from '../actions/TodoActions';

class TodoApp extends Component {
  render() {
    const { todos, actions } = this.props;
    console.log('repa')
    return (
      <div>
        <AppWindow/>
      </div>
    );
  }
}

function mapState(state) {
  return {
    todos: state.todos
  };
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(mapState, mapDispatch)(TodoApp);
