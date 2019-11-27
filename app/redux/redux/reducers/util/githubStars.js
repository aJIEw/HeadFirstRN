import {combineReducers} from "redux";
import {
  FETCH_GithubStars,
  FETCH_GithubStars_Failure,
  FETCH_GithubStars_Success
} from "../../actions/util/fetchGithubStars";


function data(state = [], actions) {
  switch (actions.type) {
    case FETCH_GithubStars_Success:
      return actions.data;
    default:
      return state;
  }
}

function isFetching(state = false, actions) {
  switch (actions.type) {
    case FETCH_GithubStars:
      return true;
    case FETCH_GithubStars_Success:
    case FETCH_GithubStars_Failure:
      return false;
    default:
      return state;
  }
}

const githubStars = combineReducers({data, isFetching});

export default githubStars;