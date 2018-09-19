import {CHANGE_BACK, CHANGE_TEXT} from "../actions/changeText";

function textReducer(state = {text: 'Hi', color: 'black'}, action) {

  let text = action.text;
  let color = action.color;

  // 判断 action 类型
  switch (action.type) {
    case CHANGE_TEXT:
      // 返回新状态
      return Object.assign({}, state, {
        text: '新文字：' + text,
        color: color
      });

    case CHANGE_BACK:
      return {
        ...state,
        text,
        color
      };
    default:
      return state;
  }
}

export default textReducer;