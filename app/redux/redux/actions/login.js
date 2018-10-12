
export const Request_login_requesting = 'Request_login_requesting';
export const Request_login_success = 'Request_login_success';
export const Request_login_failure = 'Request_login_failure';
export const Request_logout = 'Request_logout';

/**
 * 这里模拟发起异步登录请求，并获取结果
 * */
export function login(info) {
  return async (dispatch, getState) => {
    dispatch({type: Request_login_requesting});

    // 模拟发起请求并获取结果
    let res = 'fakeAuthRequestAndGetResult';

    if (res) {
      dispatch({type: Request_login_success, data: res});
    } else {
      dispatch({type: Request_login_failure});
    }
  }
}

export function logout(){
  return {type: Request_logout};
}