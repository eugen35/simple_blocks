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

export function elMouseDown({clientX, clientY, elType, elId}) {
  return {
    type: types.EL_MOUSE_DOWN,
    elType,
    elId,
    mouseX: clientX,
    mouseY: clientY
  };
}
export function mouseUp(e) {
  return {
    type: types.MOUSE_UP
  }
}
export function mouseMove(e) {
  return {
    type: types.MOUSE_MOVE,
    mouseX: e.clientX,
    mouseY: e.clientY
  }
};
export function elDoubleClick({elType, elId}) {
  return {
    type: types.EL_DOUBLE_CLICK,
    elType,
    elId
  };
}

export function textAreaChange(event) {
  return {
    type: types.TEXTAREA_CHANGE,
    text: event.target.value
  };
}
export function textAreaBlur() {
  return {
    type: types.TEXTAREA_BLUR
  };
}

export function chartDoubleClick(e) {
  return {
    type: types.CHART_DOUBLE_CLICK,
    x: e.nativeEvent.offsetX,
    y: e.nativeEvent.offsetY
  };
}
