import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import AppWindow from '../components/AppWindow';
import * as TodoActions from '../actions/TodoActions';
import * as BlockChartActions from '../actions/BlockChartActions';

class TodoApp extends Component {
  render() {
    const { todos, blocks, actions, blockChartActions } = this.props;
    return (
      <div>
        <AppWindow blockChat = {blocks} blockChartActions = {blockChartActions}/>
      </div>
    );
  }
}

function mapState(state) {
  return {
    todos: state.todos,
    blocks: state.blocks
  };
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch),
    blockChartActions: bindActionCreators(BlockChartActions, dispatch)
  };
}

export default connect(mapState, mapDispatch)(TodoApp);
