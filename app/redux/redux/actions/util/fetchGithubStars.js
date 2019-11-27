import request from "../../../../util/request";


export const FETCH_GithubStars = 'FETCH_GithubStars';
export const FETCH_GithubStars_Success = 'FETCH_GithubStars_Success';
export const FETCH_GithubStars_Failure = 'FETCH_GithubStars_Failure';


export function fetchGithubStarsThunk() {
  return async (dispatch, getState) => {

    dispatch({type: FETCH_GithubStars});

    let page = 25;
    let result = await request.get('https://api.github.com/users/ajiew/starred', {page});

    if (result.length) {
      dispatch({type: FETCH_GithubStars_Success, data: result});
    } else {
      dispatch({type: FETCH_GithubStars_Failure});
    }
  };
}