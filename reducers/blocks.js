import * as types from '../constants/ActionTypes';
var randomcolor = require('randomcolor')
var genUniqueId = require('shortid').generate;

function getInitialDragging(){return { elType: undefined, elId: undefined, mouseX: undefined, mouseY: undefined } }

const initialState = {
  blocks:{
    "1": {x:100, y:150, width:50, height:50, backgroundColor:randomcolor({luminosity: 'light'}), scale:1, text:'Блок1'},
    "2": {x:200, y:300, width:40, height:40, backgroundColor:randomcolor({luminosity: 'light'}), scale:1, text:'Блок2'},
  },
  canvas: {x:0, y:0, width:2000, height:2000, canvasScale:1, backgroundColor:'lightgreen'},
  settings: {canvasMoveDelta: 2, canvasZoomDegree: 0.0005},
  dragging: getInitialDragging(),
  selection: [],
  textArea: undefined
};

export default function blocks(state = initialState, action) {
  let x, y, id

  switch (action.type) {

    case types.MOUSE_UP:
      return {
        ...state,
        dragging: getInitialDragging()
      }


    case types.MOUSE_MOVE:
      //@todo [юзабилити] [средняя срочность] Мышью таскает с зависаниями. Это очень стрёмно (
      blocks = {...state.blocks}
      blocks[state.dragging.elId].x = blocks[state.dragging.elId].x + (action.mouseX - state.dragging.mouseX)/state.canvas.canvasScale;
      blocks[state.dragging.elId].y = blocks[state.dragging.elId].y + (action.mouseY - state.dragging.mouseY)/state.canvas.canvasScale;
      return {
        ...state,
        blocks,
        dragging: {
          ...state.dragging,
          mouseX: action.mouseX,
          mouseY: action.mouseY,
        }
      }

    case types.EL_MOUSE_DOWN:
      return {
        ...state,
        dragging: { elType: action.elType, elId: action.elId, mouseX: action.mouseX, mouseY: action.mouseY }
      }

    case types.EL_DOUBLE_CLICK:
      return {
        ...state,
        textArea: { elType: action.elType, elId: action.elId }
      };

    case types.TEXTAREA_CHANGE:
      blocks = {...state.blocks}
      blocks[ state.textArea.elId ].text = action.text
      return {
        ...state,
        blocks
      };

    case types.TEXTAREA_BLUR:
      return {
        ...state,
        textArea: undefined
      };

    case types.CHART_ZOOM: //@todo [юзабилити][отдалённое] Нам нужна ещё настройка, -насколько увеличить чат... может как-то от браузера получать эту информацию - когда зумишь, в правом верхнем углу пишется на сколько (это если не отменил стандартное поведение) и формулы были бы проще?
      //@todo [произвоительность] [юзабилити] action.DeltaY содержит число, возможно связанное со скоросью скроллинга в браузере.
      // А его знак показывает его навправление: e.deltaY < 0 ? 'вверх' : 'вниз'
      // Заметил, что число бывает разное - смотрел в Хроме. Но только двух видов: 100, 200, -100б -200
      // Вдруг в разных браузерах оно разное?
      // Возможно, лучше сюда присылать только направление - вверх или вниз и мы на что-то стандартное увеличим или уменьшим canvasScale
      // Сейчас же ещё и умножение производится, что наверное более длительная операция по сравнению со сложением
      return {
        ...state,
        canvas: {
          ...state.canvas,
          canvasScale: state.canvas.canvasScale + action.deltaY * state.settings.canvasZoomDegree
        }};

  case types.CHART_MOVE: //@todo [юзабилити][отдалённое] Нам нужна ещё настройка, -насколько сдвинуть чат... может как-то от браузера получать эту информацию - когда зумишь, в правом верхнем углу пишется на сколько (это если не отменил стандартное поведение) и формулы были бы проще (можно было бы две цифры передавать - вправо и влево)?
    x = state.canvas.x;
    y = state.canvas.y;
    if ( 'left' == action.direction ) {
      x = x - state.settings.canvasMoveDelta
    } else if ( 'right' == action.direction ) {
      x = x + state.settings.canvasMoveDelta
    } else if ( 'up' == action.direction ) {
      y = y - state.settings.canvasMoveDelta
    } else {
      y = y + state.settings.canvasMoveDelta
    }

    return {
      ...state,
      canvas: {
        ...state.canvas,
        x: state.canvas.canvasScale + ( action.isZoomIn ? (-0.02 ) : 0.02 )
      }};

  case types.CHART_DOUBLE_CLICK:
    blocks = {...state.blocks}
    blocks[ genUniqueId() ] = {
      x: action.x / state.canvas.canvasScale,
      y:action.y / state.canvas.canvasScale,
      width:50,
      height:50,
      backgroundColor: randomcolor({luminosity: 'light'}),
      scale:1,
      text:''
    }
    return {
      ...state,
      blocks
    };


  default:
    return state;
  }
}
