
import * as types from '../actions/ActionTypes';
import * as constants from '../constants/constants';

const { initialState } = constants;

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.RANK_ACTION:

      return {
        ...state,
        moviesByRank: action.data,
      };

    case types.RELEASE_ACTION:

      return {
        ...state,
        moviesByRelease: action.data,
      };
    default:
        return state
  }
}
export default reducer;
