
export const FETCH_DATA_IN_PROGRESS = 'FETCH_DATA_IN_PROGRESS';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_Failure = 'FETCH_DATA_Failure';

export function getData(url) {
  return async (dispatch, getState) => {

    let param = getState().getData.param;

    dispatch({type: FETCH_DATA_IN_PROGRESS});

    // request 是封装的 fetch 请求
    const res = await request.post(url, {param});

    if (res && !res.status) {
      dispatch({type: FETCH_DATA_SUCCESS, data: res.data});
    } else {
      dispatch({type: FETCH_DATA_Failure});
    }
  }
}