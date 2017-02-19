import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import TodoTextInput from './TodoTextInput';
import NavToolBar from './NavToolBar'
import CanvasView from './CanvasView'
//Это полифилл. Поэтому мы его цепляем здесь. Он нам нужен на стороне клиента для сохранения файлов на клиенте.. Хотя вызываем мы его в редьюсере
import FileSaver from 'file-saver';

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
    const { blockChat, blockChartActions } = this.props

    let mouseMove, mouseUp
    if (undefined == blockChat.dragging.elType) {
      mouseMove = ()=>{return null}
      mouseUp = ()=>{return null}
    } else {
      mouseMove  = blockChartActions.mouseMove;
      mouseUp  = blockChartActions.mouseUp;
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
          <NavToolBar blockChartActions={blockChartActions}/>
          <CanvasView blockChat={blockChat} blockChartActions={blockChartActions}/>
        </div>
    );
  }
}
