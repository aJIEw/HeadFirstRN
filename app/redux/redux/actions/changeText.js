
// 当项目复杂到一定程度的时候，Action type 也应该放到固定的地方来管理
export const CHANGE_TEXT = 'CHANGE_TEXT';
export const CHANGE_BACK = 'CHANGE_BACK';

export function changeText(text, color) {
  return {
    type: CHANGE_TEXT,
    text,
    color,
  };
}

export function changeBack() {
  return {
    type: CHANGE_BACK,
    text: 'Hi',
    color: 'black',
  }
}