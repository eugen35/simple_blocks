import * as types from '../constants/ActionTypes';

export function chartZoomIn(deltaY) {
  console.log('ПРИБЛИЖАЮЩЕЕ ДЕЙСТВИЕ')
  return {
    type: types.CHART_ZOOM,
    deltaY
  };
}

export function chartMove({ clientX, clientY }) {
  return {
    type: types.CHART_MOVE,
    moveInfo: { deltaX, deltaY }
  };
}


