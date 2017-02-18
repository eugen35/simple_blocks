import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import TodoTextInput from './TodoTextInput';
import NavToolBar from './NavToolBar'
import CanvasView from './CanvasView'

export default class AppWindow extends Component {
  handleWheel = (e) => {
    //Диаграмму приближаем только при нажатой клавише ctrl и кручении колёсика мыши вниз, а удаляем при ctrl + колёсико мыши вверх
    e.preventDefault(); //Предотвращаем нативный зум. Возможно, этим мы снижаем производительность проги? [производительность] может нам тока меню перерисовывать - чтоб она уменьшалось обратно пропорционально зуму?
    if ( e.ctrlKey ) this.props.blockChartActions.chartZoomIn( e.deltaY )
    //console.log('Направления', e.deltaY < 0 ? 'вверх' : 'вниз' );
  }

  handleMouseMove = (e) => {
    //console.log('Направления', e);
    e.preventDefault();
    //Диаграмму двигаем только при нажатой клавише ctrl
    //if ( e.ctrlKey ) this.props.blockChartActions.chartMove({clientX: e.clientX, clientY: e.clientY})
    //console.log('Координаты', e.clientX, ' ', e.clientY);
    if ( undefined != this.props.blockChat.dragging.elType ) {
      this.props.blockChartActions.mouseMove({clientX:e.clientX, clientY:e.clientY})
    }
  }



  //Вот сниппет, взятый за основу https://jsfiddle.net/eqcfgaz8/
  render() {
    const { blockChat } = this.props
    const elMouseDown  = this.props.blockChartActions.elMouseDown
    let mouseMove, mouseUp
    if (undefined == blockChat.dragging.elType) {
      mouseMove = ()=>{return null}
      mouseUp = ()=>{return null}
    } else {
      mouseMove  = this.props.blockChartActions.mouseMove;
      mouseUp  = this.props.blockChartActions.mouseUp;
    }
    return (
        <div
          onMouseUp = {mouseUp}
          onMouseMove = {this.handleMouseMove}
          onWheel = {this.handleWheel}
          style = {{
            display: 'flex',
            flexFlow: 'column',
            height: '80%',
            backgroundColor: 'yellow'
          }}>
          <NavToolBar/>
          <CanvasView blockChat={blockChat} elMouseDown={elMouseDown}/>
        </div>
    );
  }
}
